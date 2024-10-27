import { Body, Controller, Post } from '@nestjs/common';

import { IUser } from '../../../database/types/user';
import { UserService } from '../services/users.service';

@Controller()
export class UserApiController {
  constructor(private readonly staffServices: UserService) {}

  @Post('/auth')
  async authUser(@Body() data: { email: string }): Promise<IUser> {
    const staff = await this.staffServices.getUser(data.email);
    return staff.dataValues;
  }
}
