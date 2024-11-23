import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Session,
} from '@nestjs/common';
import { IDevice } from 'src/database/types/device';
import { checkRoles } from 'src/utils/validate';

import { DeviceService } from '../services/devices.service';

@Controller()
export class DeviceApiController {
  constructor(private readonly deviceServices: DeviceService) {}

  @Get('/')
  async getDeviceByFilter(
    @Query() filter: Partial<IDevice>,
    @Session() session,
  ): Promise<IDevice[]> {
    const allowAll = checkRoles(session, ['manager', 'maintenance']);
    if (!Object.keys(filter).length && allowAll) {
      const devices = await this.deviceServices.getDevices();
      return devices.map((device) => device.dataValues);
    } else {
      const device = await this.deviceServices.getFilterDevice({
        ...filter,
        ...(!allowAll ? { employeeId: session.user.info.id } : {}),
      });
      return device.map((device) => device.dataValues);
    }
  }

  @Post('/')
  async createDevice(
    @Body() data: { device: Partial<IDevice> },
    @Session() session,
  ): Promise<IDevice> {
    const allowCreate = checkRoles(session, ['maintenance']);
    if (!allowCreate) {
      throw new Error('Permission denied to create device');
    }
    const newDevice = await this.deviceServices.createDevice(data.device);
    return newDevice.dataValues;
  }

  @Put('/')
  async updateDevice(
    @Body() data: { id: string; device: IDevice },
  ): Promise<{ success: boolean }> {
    const success = await this.deviceServices.updateDevice(
      data.id,
      data.device,
    );
    return { success };
  }

  @Delete('/')
  async deleteDevice(
    @Query() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.deviceServices.deleteDevice(data.id);
    return { success };
  }
}
