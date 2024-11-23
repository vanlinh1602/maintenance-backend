import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { IDevice, IDeviceCreate } from '../types/device';
import { DeviceCatalog } from './device-catalog.entity';
import { Room } from './rooms.entity';
import { User } from './users.entity';

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

  @ForeignKey(() => Room)
  @Column
  roomId: string;

  @ForeignKey(() => User)
  @Column
  employeeId: string;

  @ForeignKey(() => DeviceCatalog)
  @Column
  type: string;

  @Column(DataType.STRING)
  image: string;
}
