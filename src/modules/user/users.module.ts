import { Module } from '@nestjs/common';

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
  ],
  providers: [
    UserService,
    {
      provide: 'USER_REPOSITORY',
      useValue: User,
    },
  ],
  controllers: [],
})
export class UserModule {}
