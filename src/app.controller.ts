import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('')
  getTasks() {
    return this.appService.getTasks();
  }
}
