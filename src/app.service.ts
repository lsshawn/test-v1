import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GET Hello World! Proxy IP is ___. User IP is __.';
  }

  postHello(): string {
    return 'POST Hello World! Proxy IP is ___. User IP is __.';
  }
}
