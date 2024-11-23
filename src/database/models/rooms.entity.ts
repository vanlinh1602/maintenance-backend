import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { IRoom, IRoomCreate } from '../types/room';
import { User } from './users.entity';

@Table({
  tableName: 'rooms',
})
export class Room extends Model<IRoom, IRoomCreate> {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  leader: string;
}
