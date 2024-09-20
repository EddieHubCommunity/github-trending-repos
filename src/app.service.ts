import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { format } from 'date-fns';
import * as cheerio from 'cheerio';

import { PrismaService } from './prisma.service';
import { Trending, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private prisma: PrismaService) {}

  async getStats(): Promise<any> {
    return this.prisma.trending.groupBy({
      by: ['createdAt', 'type'],
      _count: { id: true },
    });
  }

  async getTrending(type: string = 'daily', date: string): Promise<Trending[]> {
    if (!date) {
      date = format(new Date(), 'yyyy-MM-dd');
    }
    return this.prisma.trending.findMany({
      where: { type, createdAt: `${format(date, 'yyyy-MM-dd')}T00:00:00Z` },
    });
  }

  @Cron('00 10 08 * * *')
  async refresh(): Promise<number> {
    const prisma = this.prisma;
    const repos = { daily: 0, weekly: 0, monthly: 0 };

    const items = [];
    await Promise.all(
      Object.keys(repos).map(async (type) => {
        const url = `https://github.com/trending?since=${type}`;
        const res = await fetch(url, { cache: 'no-store' });
        const text = await res.text();
        const $ = cheerio.load(text);

        repos[type] = $('article').length;
        $('article').each(function () {
          const name = $(this).find('h2 a').attr('href');
          const stars = $(this).find('div span').last().text();
          const item = {
            name,
            type,
            message: stars.replaceAll(/\n/g, '').trim(),
            trendingStars: parseInt(stars.replaceAll(/\D+/g, '').trim()),
            language: $(this)
              .find("div span[itemprop='programmingLanguage']")
              .text(),
            stars: parseInt(
              $(this)
                .find(`a[href="${name}/stargazers"]`)
                .text()
                .replaceAll(/\D+/g, ''),
            ),
            forks: parseInt(
              $(this)
                .find(`a[href="${name}/forks"]`)
                .text()
                .replaceAll(/\D+/g, ''),
            ),
          };

          items.push(item);
        });
        return items;
      }),
    );

    this.logger.log(repos);

    items.map(async (item: any) => {
      // 1. save Trending results to DB with a date
      // check if item exists for today, if yes then skip
      const trending = await prisma.trending.findFirst({
        where: {
          type: item.type,
          name: item.name,
          createdAt: `${format(new Date(), 'yyyy-MM-dd')}T00:00:00Z`,
        },
      });
      if (trending) {
        this.logger.log(
          `EXISTS: ${item.name} on ${format(new Date(), 'yyyy-MM-dd')}`,
        );
        return;
      }

      // 2. if trending item doesn't exist for today
      this.logger.log(
        `NEW: ${item.name} on ${format(new Date(), 'yyyy-MM-dd')}`,
      );
      await prisma.trending.create({
        data: {
          type: item.type,
          name: item.name,
          message: item.message,
          trendingStars: item.trendingStars,
          language: item.language,
          stars: item.stars,
          forks: item.forks,
          createdAt: `${format(new Date(), 'yyyy-MM-dd')}T00:00:00Z`,
        },
      });
    });

    return items.length;
  }
}
