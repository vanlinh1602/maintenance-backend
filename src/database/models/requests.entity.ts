import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

import { IRequest, IRequestCreate } from '../types/request';

@Table({
  tableName: 'requests',
})
export class Request extends Model<IRequest, IRequestCreate> {
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

  @CreatedAt
  createdAt: Date;

  @Column(DataType.DOUBLE)
  completedDate: number;

  @Column
  employeeId: string;

  @Column
  creator: string;

  @Column
  deviceId: string;

  @Column
  priority: string;
}
