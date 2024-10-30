import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { IRole, IRoleCreate } from '../types/role';

@Table({
  tableName: 'roles',
})
export class Role extends Model<IRole, IRoleCreate> {
  @Column
  name: string;

  @Column(DataType.BOOLEAN)
  isAdmin: boolean;

  @Column(DataType.BOOLEAN)
  isManager: boolean;
}
