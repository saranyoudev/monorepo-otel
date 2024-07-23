import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({
    cmd: 'users',
    method: 'get-users',
  })
  getUsers(): Record<string, any>[] {
    return this.userService.getUsers();
  }

  @MessagePattern({
    cmd: 'users',
    method: 'get-user',
  })
  getUser(@Payload('id') id: string): Record<string, any> {
    return this.userService.getUser(id);
  }
}
