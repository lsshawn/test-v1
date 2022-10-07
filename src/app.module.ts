import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './common/config/configuration';
import { ProxyMiddleware } from './common/proxy.middleware';
import { UserMiddleware } from './common/user.middleware';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProxyMiddleware).forRoutes('*');
    consumer.apply(UserMiddleware).forRoutes('*');
  }
}
