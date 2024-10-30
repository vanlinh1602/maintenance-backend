import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { IDeviceCatalog, IDeviceCatalogCreate } from '../types/device';

@Table({
  tableName: 'device-catalog',
})
export class DeviceCatalog extends Model<IDeviceCatalog, IDeviceCatalogCreate> {
  @Column
  name: string;

  @Column(DataType.STRING)
  type: 'type' | 'status';

  @Column
  color: string;
}
