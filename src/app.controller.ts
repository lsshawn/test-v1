import {
  BadRequestException,
  Controller,
  Query,
  Get,
  Param,
  Post,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }

  @Post(':id')
  postHelloId(@Param('id') id: string, @Query('role') role: string) {
    return `request with id ${id}. Role: ${role}`;
  }

  @Delete()
  deleteHello(@Param('id') id: string) {
    throw new BadRequestException(`Bad request with id ${id}`);
  }
}
