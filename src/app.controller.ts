import {
  BadRequestException,
  Controller,
  Query,
  Get,
  Param,
  Post,
  Delete,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      limits: {
        fileSize: 25 * 1024 * 1024,
      },
    }),
  )
  postHello(
    @UploadedFile() image: Express.Multer.File,
    @Body() body: any,
  ): string {
    console.log(image);
    // console.log(body);

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
