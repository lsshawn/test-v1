import {
  Injectable,
  Inject,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import * as requestIp from 'request-ip';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
  ) {}
  async use(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    // const ip = requestIp.getClientIp(request);
    // console.log('LS -> src/common/proxy.middleware.ts:21 -> ip: ', ip);

    // const proxyIP = this.configService.get<string>('PROXY_IP');

    // const APP_ENV = this.configService.get<string>('APP_ENV');
    // const isProd = APP_ENV !== 'dev';

    // if (isProd && !['::ffff:127.0.0.1', proxyIP].includes(ip)) {
    //   throw new UnauthorizedException('IP Access Denied');
    // }
    next();
  }
}
