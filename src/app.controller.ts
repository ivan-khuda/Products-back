import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { hello: string } {
    return {
      hello: this.appService.getHello(),
    };
  }

  @Get('/api/specCheck')
  getHello1(): { hello: string; test: string } {
    return {
      hello: this.appService.getHello(),
      test: 'test',
    };
  }

  @Get('/specCheck')
  specCheck(): { hello: string; test: string } {
    return {
      hello: this.appService.getHello(),
      test: 'specCheck',
    };
  }
}
