import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { IUser, IUserCreate } from '../types/user';
import { Role } from './roles.entity';
import { Room } from './rooms.entity';

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

  @ForeignKey(() => Role)
  @Column
  roleId: string;

  @ForeignKey(() => Room)
  @Column
  roomId: string;

  @Column
  avatar: string;
}
