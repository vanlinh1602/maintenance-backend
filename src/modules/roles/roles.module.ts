import { Module } from '@nestjs/common';

import { Role } from './database/roles.entity';
import { RoleService } from './services/roles.service';

@Module({
  imports: [],
  exports: [
    RoleService,
    {
      provide: 'ROLE_REPOSITORY',
      useValue: Role,
    },
  ],
  providers: [
    RoleService,
    {
      provide: 'ROLE_REPOSITORY',
      useValue: Role,
    },
  ],
  controllers: [],
})
export class RoleModule {}
