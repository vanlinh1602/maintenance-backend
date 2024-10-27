import { Inject, Injectable } from '@nestjs/common';

import { User } from '../../../database/models/users.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private staffRepository: typeof User,
  ) {}

  async getUser(email: string): Promise<User> {
    return this.staffRepository.findOne({
      where: {
        email,
      },
    });
  }
}
