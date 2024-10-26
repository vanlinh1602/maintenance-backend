import { Module } from '@nestjs/common';

import { Staff } from './database/staffs.entity';
import { StaffService } from './services/staffs.service';

@Module({
  imports: [],
  exports: [
    StaffService,
    {
      provide: 'STAFF_REPOSITORY',
      useValue: Staff,
    },
  ],
  providers: [
    StaffService,
    {
      provide: 'STAFF_REPOSITORY',
      useValue: Staff,
    },
  ],
  controllers: [],
})
export class StaffModule {}
