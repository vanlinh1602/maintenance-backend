import { Optional } from 'sequelize';

import { Device } from '../database/devices.entity';

export interface IDevice {
  id: string;
  name: string;
  serial: string;
  description: string;
  purchaseDate: number;
  assignedDate: number;
  warrantyExpireDate: number;
  status: string;
  roomId: string;
  employeeId: string;
  categoryId: string;
}

export type IDeviceCreate = Optional<IDevice, 'id'>;

export interface IDeviceService {
  getDevice: (filter: Partial<IDevice>) => Promise<Device>;
  getDevices: () => Promise<Device[]>;
  createDevice: (device: Partial<IDevice>) => Promise<Device>;
  updateDevice: (id: string, device: Device) => Promise<boolean>;
  deleteDevice: (deviceId: string) => Promise<boolean>;
}
