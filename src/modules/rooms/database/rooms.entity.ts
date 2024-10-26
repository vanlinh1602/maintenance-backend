import { Column, Model, Table } from 'sequelize-typescript';

import { IRoom, IRoomCreate } from '../interfaces/rooms.service.interface';

@Table({
  tableName: 'rooms',
})
export class Room extends Model<IRoom, IRoomCreate> {
  @Column
  name: string;

  @Column
  leader: string;
}
