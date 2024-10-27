import { Column, Model, Table } from 'sequelize-typescript';

import { IRoom, IRoomCreate } from '../types/room';

@Table({
  tableName: 'rooms',
})
export class Room extends Model<IRoom, IRoomCreate> {
  @Column
  name: string;

  @Column
  leader: string;
}
