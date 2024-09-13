import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Этот декоратор отвечает за путь к endpoint
  getHello(): string {
    return this.appService.getHello();
  }
}
