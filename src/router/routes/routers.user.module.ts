import { Module } from '@nestjs/common';
import { UserApiController } from 'src/modules/user/controllers/users.api.controller';
import { UserModule } from 'src/modules/user/users.module';

@Module({
  imports: [UserModule],
  exports: [],
  providers: [],
  controllers: [UserApiController],
})
export class RouterUserModule {}
