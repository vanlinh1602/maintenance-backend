import { Module } from '@nestjs/common';
import { RoleApiController } from 'src/modules/roles/controllers/roles.api.controller';
import { RoleModule } from 'src/modules/roles/roles.module';

@Module({
  imports: [RoleModule],
  exports: [],
  providers: [],
  controllers: [RoleApiController],
})
export class RouterRoleModule {}
