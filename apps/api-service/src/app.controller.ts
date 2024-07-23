import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): Promise<Record<string, any>[]> {
    return this.appService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<Record<string, any>> {
    return this.appService.getUser(id);
  }
}
