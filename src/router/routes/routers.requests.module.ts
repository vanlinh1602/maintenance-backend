import { Module } from '@nestjs/common';
import { RequestApiController } from 'src/modules/requests/controllers/requests.api.controller';
import { RequestModule } from 'src/modules/requests/requests.module';

@Module({
  imports: [RequestModule],
  exports: [],
  providers: [],
  controllers: [RequestApiController],
})
export class RouterRequestModule {}
