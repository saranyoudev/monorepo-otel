import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, timeout } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceRMQ: ClientProxy,
  ) {}

  getUsers(): Promise<Record<string, any>[]> {
    return lastValueFrom(
      this.userServiceRMQ
        .send({ cmd: 'users', method: 'get-users' }, {})
        .pipe(timeout(5000)),
    );
  }

  getUser(id: string): Promise<Record<string, any>> {
    return lastValueFrom(
      this.userServiceRMQ
        .send({ cmd: 'users', method: 'get-user' }, { id })
        .pipe(timeout(5000)),
    );
  }
}
