import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IDevice } from '../interfaces/devices.service.interface';
import { DeviceService } from '../services/devices.service';

@Controller()
export class DeviceApiController {
  constructor(private readonly deviceServices: DeviceService) {}

  @Get('/get/all')
  async getDevices(): Promise<IDevice[]> {
    const devices = await this.deviceServices.getDevices();
    return devices.map((device) => device.dataValues);
  }

  @Get('/get/:id')
  async getDevice(@Param('id') id: string): Promise<IDevice> {
    const device = await this.deviceServices.getDevice({ id });
    return device.dataValues;
  }

  @Post('/get')
  async getDeviceByFilter(@Body() filter: Partial<IDevice>): Promise<IDevice> {
    const device = await this.deviceServices.getDevice(filter);
    return device.dataValues;
  }

  @Post('/create')
  async createDevice(
    @Body() data: { device: Partial<IDevice> },
  ): Promise<IDevice> {
    const newDevice = await this.deviceServices.createDevice(data.device);
    return newDevice.dataValues;
  }

  @Post('/update')
  async updateDevice(
    @Body() data: { id: string; device: IDevice },
  ): Promise<{ success: boolean }> {
    const success = await this.deviceServices.updateDevice(
      data.id,
      data.device,
    );
    return { success };
  }

  @Post('/delete')
  async deleteDevice(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.deviceServices.deleteDevice(data.id);
    return { success };
  }
}
