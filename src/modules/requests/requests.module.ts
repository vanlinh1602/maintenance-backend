import { Module } from '@nestjs/common';

import { Request } from './database/requests.entity';
import { RequestService } from './services/requests.service';

@Module({
  imports: [],
  exports: [
    RequestService,
    {
      provide: 'REQUEST_REPOSITORY',
      useValue: Request,
    },
  ],
  providers: [
    RequestService,
    {
      provide: 'REQUEST_REPOSITORY',
      useValue: Request,
    },
  ],
  controllers: [],
})
export class RequestModule {}
