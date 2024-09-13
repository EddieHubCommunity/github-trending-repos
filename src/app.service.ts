import { Injectable } from '@nestjs/common';

import * as cheerio from 'cheerio';

@Injectable()
export class AppService {
  getTrending(): number {
    const total = 0;
    const repos = { daily: 0, weekly: 0, monthly: 0 };

    Object.keys(repos).map(async (type) => {
      const url = `https://github.com/trending?since=${type}`;
      const res = await fetch(url, { cache: 'no-store' });
      const text = await res.text();
      const $ = cheerio.load(text);

      console.log('FOUND TRENDING', type, $('article').length);
      repos[type] = $('article').length;

      $('article').each(function () {
        const name = $(this).find('h2 a').attr('href');
        const stars = $(this).find('div span').last().text();
        const item = {
          name,
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

        console.log(item);

        // 3. save Trending results to DB with a date
        // 3a. check if entry exists, then skip

        // 3b. if doesn't exist save

        // 4. increment each repo counter
        // 4a. check if entry exists, if it does increment
      });
    });

    return total;
  }
}
