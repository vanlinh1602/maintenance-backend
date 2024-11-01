import { Body, Controller, Post, Req, Session } from '@nestjs/common';

import { IUser } from '../../../database/types/user';
import { UserService } from '../services/users.service';

@Controller()
export class UserApiController {
  constructor(private readonly staffServices: UserService) {}

  @Post('/auth')
  async authUser(
    @Session() session,
    @Body()
    data: {
      info: {
        name: string;
        email: string;
        phone: string;
        avatar: string;
      };
      token: string;
    },
  ): Promise<{
    info: IUser;
    isAdmin: boolean;
    isManager: boolean;
    isMaintenance: boolean;
  }> {
    const auth = await this.staffServices.authUser(data);
    session.user = auth;
    return auth;
  }

  @Post('/signOut')
  async signOut(@Req() request): Promise<void> {
    request.session.destroy((error) => {
      if (error) {
        throw error;
      }
    });
    return;
  }
}
