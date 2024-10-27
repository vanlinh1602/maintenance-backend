import { Column, Model, Table } from 'sequelize-typescript';

import { IRole, IRoleCreate } from '../types/role';

@Table({
  tableName: 'roles',
})
export class Role extends Model<IRole, IRoleCreate> {
  @Column
  name: string;
}
