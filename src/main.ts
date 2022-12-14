import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  app.enableCors({ origin: '*' });

  await app.listen(configService.get<number>('port'), () => {
    console.log(
      `Server is running on port: ${configService.get<number>('port')}`,
    );
  });
}
bootstrap();
