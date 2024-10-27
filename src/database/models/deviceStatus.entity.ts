import { Column, Model, Table } from 'sequelize-typescript';

import { IDeviceStatus, IDeviceStatusCreate } from '../types/device';

@Table({
  tableName: 'device-status',
})
export class DeviceStatus extends Model<IDeviceStatus, IDeviceStatusCreate> {
  @Column
  name: string;
}
