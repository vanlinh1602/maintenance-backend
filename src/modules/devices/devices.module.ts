import { Module } from '@nestjs/common';

import { Device } from './database/devices.entity';
import { DeviceService } from './services/devices.service';

@Module({
  imports: [],
  exports: [
    DeviceService,
    {
      provide: 'DEVICE_REPOSITORY',
      useValue: Device,
    },
  ],
  providers: [
    DeviceService,
    {
      provide: 'DEVICE_REPOSITORY',
      useValue: Device,
    },
  ],
  controllers: [],
})
export class DeviceModule {}
