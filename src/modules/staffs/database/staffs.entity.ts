import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { IStaff, IStaffCreate } from '../interfaces/staffs.service.interface';

@Table({
  tableName: 'staffs',
})
export class Staff extends Model<IStaff, IStaffCreate> {
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
}
