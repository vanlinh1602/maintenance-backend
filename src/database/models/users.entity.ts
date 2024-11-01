import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { IUser, IUserCreate } from '../types/user';

@Table({
  tableName: 'users',
})
export class User extends Model<IUser, IUserCreate> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column(DataType.DOUBLE)
  birthdate: number;

  @Column
  gender: string;

  @Column
  address: string;

  @Column
  citizenId: string;

  @Column
  roleId: string;

  @Column
  roomId: string;

  @Column
  avatar: string;
}
