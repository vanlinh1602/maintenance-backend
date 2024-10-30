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
  createdAt: Date;
  updatedAt: Date;
}

export interface IDeviceCatalog {
  id: string;
  name: string;
  type: 'type' | 'status';
  createdAt: Date;
  updatedAt: Date;
}

export type IDeviceCreate = Optional<IDevice, 'id'>;
export type IDeviceCatalogCreate = Optional<IDeviceCatalog, 'id'>;
