import { Device } from 'src/database/models/devices.entity';
import { IDevice } from 'src/database/types/device';

export interface IDeviceService {
  getFilterDevice: (filter: Partial<IDevice>) => Promise<Device[]>;
  getDevices: () => Promise<Device[]>;
  createDevice: (device: Partial<IDevice>) => Promise<Device>;
  updateDevice: (id: string, device: Device) => Promise<boolean>;
  deleteDevice: (deviceId: string) => Promise<boolean>;
}
