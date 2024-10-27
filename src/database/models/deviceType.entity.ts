import { Column, Model, Table } from 'sequelize-typescript';

import { IDeviceType, IDeviceTypeCreate } from '../types/device';

@Table({
  tableName: 'device-types',
})
export class DeviceType extends Model<IDeviceType, IDeviceTypeCreate> {
  @Column
  type: string;
}
