import { Inject, Injectable } from '@nestjs/common';
import { IDevice } from 'src/database/types/device';

import { Device } from '../../../database/models/devices.entity';
import { IDeviceService } from '../interfaces/devices.service.interface';

@Injectable()
export class DeviceService implements IDeviceService {
  constructor(
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: typeof Device,
  ) {}

  async getDevice(filter: Partial<IDevice>): Promise<Device> {
    return this.deviceRepository.findOne({
      where: filter,
    });
  }

  async getDevices(): Promise<Device[]> {
    return this.deviceRepository.findAll();
  }

  async createDevice(device: Partial<IDevice>): Promise<Device> {
    return this.deviceRepository.create(device);
  }

  async updateDevice(id: string, device: Partial<Device>): Promise<boolean> {
    const updated = await this.deviceRepository.update(device, {
      where: {
        id,
      },
    });
    return updated[0] > 0;
  }

  async deleteDevice(deviceId: string): Promise<boolean> {
    const deleted = await this.deviceRepository.destroy({
      where: {
        id: deviceId,
      },
    });
    return deleted > 0;
  }
}
