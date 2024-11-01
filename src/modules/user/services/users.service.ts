import { Inject, Injectable } from '@nestjs/common';
import { Role } from 'src/database/models/roles.entity';
import { IUser } from 'src/database/types/user';

import { User } from '../../../database/models/users.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private staffRepository: typeof User,
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof Role,
  ) {}

  async authUser(data: {
    info: {
      name: string;
      email: string;
      phone: string;
      avatar: string;
    };
    token: string;
  }): Promise<{
    info: IUser;
    isAdmin: boolean;
    isManager: boolean;
    isMaintenance: boolean;
  }> {
    const user = await this.staffRepository.findOne({
      where: {
        email: data.info.email,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const roles = await this.roleRepository.findOne({
      where: {
        id: user.roleId,
      },
    });

    await this.staffRepository.update(data.info, {
      where: {
        id: user.id,
      },
    });

    return {
      info: { ...user.dataValues, ...data.info },
      isAdmin: roles.isAdmin || false,
      isManager: roles.isAdmin || roles.isManager || false,
      isMaintenance: roles.isAdmin || roles.isMaintenance || false,
    };
  }
}
