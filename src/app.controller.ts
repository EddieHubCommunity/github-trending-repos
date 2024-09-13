import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Trending } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('refresh')
  refresh(): Promise<number> {
    return this.appService.saveTrending();
  }

  @Get('/')
  findAll(): Promise<Trending[]> {
    return this.appService.getTrending();
  }
}
