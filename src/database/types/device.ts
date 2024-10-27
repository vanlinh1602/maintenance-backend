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
  type: string;
}

export interface IDeviceStatus {
  id: string;
  status: string;
}

export interface IDeviceType {
  id: string;
  type: string;
}

export type IDeviceCreate = Optional<IDevice, 'id'>;
export type IDeviceStatusCreate = Optional<IDeviceStatus, 'id'>;
export type IDeviceTypeCreate = Optional<IDeviceType, 'id'>;
