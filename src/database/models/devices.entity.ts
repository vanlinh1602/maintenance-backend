import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { IDevice, IDeviceCreate } from '../types/device';

@Table({
  tableName: 'devices',
})
export class Device extends Model<IDevice, IDeviceCreate> {
  @Column
  name: string;

  @Column
  serial: string;

  @Column
  description: string;

  @Column(DataType.DOUBLE)
  purchaseDate: number;

  @Column(DataType.DOUBLE)
  assignedDate: number;

  @Column(DataType.DOUBLE)
  warrantyExpireDate: number;

  @Column
  status: string;

  @Column
  roomId: string;

  @Column
  employeeId: string;

  @Column
  type: string;
}
