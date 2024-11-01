import { Module } from '@nestjs/common';
import { Role } from 'src/database/models/roles.entity';

import { User } from '../../database/models/users.entity';
import { UserService } from './services/users.service';

@Module({
  imports: [],
  exports: [
    UserService,
    {
      provide: 'USER_REPOSITORY',
      useValue: User,
    },
    {
      provide: 'ROLE_REPOSITORY',
      useValue: Role,
    },
  ],
  providers: [
    UserService,
    {
      provide: 'USER_REPOSITORY',
      useValue: User,
    },
    {
      provide: 'ROLE_REPOSITORY',
      useValue: Role,
    },
  ],
  controllers: [],
})
export class UserModule {}
