import { Optional } from 'sequelize';

export interface IDevice {
  id: string;
  name: string;
  serial: string;
  description?: string;
  purchaseDate: number;
  assignedDate?: number;
  warrantyExpireDate: number;
  status: string;
  roomId?: string;
  employeeId?: string;
  categoryId: string;
}

export interface IDeviceStatus {
  id: string;
  name: string;
}

export interface IDeviceType {
  id: string;
  name: string;
}

export type IDeviceCreate = Optional<IDevice, 'id'>;
export type IDeviceStatusCreate = Optional<IDeviceStatus, 'id'>;
export type IDeviceTypeCreate = Optional<IDeviceType, 'id'>;
