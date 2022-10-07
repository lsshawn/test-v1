import {
  Injectable,
  Inject,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

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
    const { ip } = request;
    const proxyIP = this.configService.get<string>('proxyIP');

    if (ip !== proxyIP) {
      throw new UnauthorizedException('Access Denied');
    }
    next();
  }
}
