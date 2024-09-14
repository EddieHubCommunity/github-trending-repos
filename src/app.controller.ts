import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Trending } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('refresh')
  refresh(): Promise<number> {
    return this.appService.refresh();
  }

  @Get('/')
  findAll(): Promise<Trending[]> {
    return this.appService.getStats();
  }

  @Get('/daily')
  findDaily(@Query('date') date: string): Promise<Trending[]> {
    return this.appService.getTrending('daily', date);
  }

  @Get('/weekly')
  findWeekly(@Query('date') date: string): Promise<Trending[]> {
    return this.appService.getTrending('weekly', date);
  }

  @Get('/monthly')
  findMonthly(@Query('date') date: string): Promise<Trending[]> {
    return this.appService.getTrending('monthly', date);
  }
}
