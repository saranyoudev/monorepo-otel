import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 'user-a',
      name: 'ozone',
    },
    {
      id: 'user-b',
      name: 'ozark',
    },
  ];

  getUsers(): Record<string, any>[] {
    return this.users;
  }

  getUser(id: string): Record<string, any> {
    return this.users.find((user) => user.id === id) ?? {};
  }
}
