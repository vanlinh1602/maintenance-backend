import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { IRequest, IRequestCreate } from '../types/request';
import { Device } from './devices.entity';
import { RequestCatalog } from './request-catalog.entity';

@Table({
  tableName: 'requests',
})
export class Request extends Model<IRequest, IRequestCreate> {
  @ForeignKey(() => RequestCatalog)
  @Column
  type: string;

  @Column
  description: string;

  @Column(DataType.JSON)
  notes: {
    userId: string;
    message: string;
    timestamp: number;
  }[];

  @Column
  status: string;

  @Column(DataType.DOUBLE)
  scheduledDate: number;

  @Column(DataType.DOUBLE)
  completedDate: number;

  @Column
  assignedTo: string;

  @Column
  creator: string;

  @ForeignKey(() => Device)
  @Column
  deviceId: string;

  @Column
  priority: string;

  @ForeignKey(() => Device)
  @Column
  replacementDeviceId: string;

  @Column(DataType.STRING)
  image: string;
}
