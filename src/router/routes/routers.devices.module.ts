import { Module } from '@nestjs/common';
import { DeviceApiController } from 'src/modules/devices/controllers/devices.api.controller';
import { DeviceModule } from 'src/modules/devices/devices.module';

@Module({
  imports: [DeviceModule],
  exports: [],
  providers: [],
  controllers: [DeviceApiController],
})
export class RouterDeviceModule {}
