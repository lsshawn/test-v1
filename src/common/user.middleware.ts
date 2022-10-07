import {
  Injectable,
  Inject,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
  ) {}
  async use(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    const userIp = request.headers['user-ip'];
    // TODO: GET user IP from database here
    const user = { ip: '198.0.0.12' };
    const APP_ENV = this.configService.get<string>('APP_ENV');
    const isDev = APP_ENV === 'dev';

    if (!isDev && userIp !== user.ip) {
      throw new UnauthorizedException('User IP not whitelisted');
    }

    next();
  }
}
