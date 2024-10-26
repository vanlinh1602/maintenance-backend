import { Column, Model, Table } from 'sequelize-typescript';

import { IRole, IRoleCreate } from '../interfaces/roles.service.interface';

@Table({
  tableName: 'roles',
})
export class Role extends Model<IRole, IRoleCreate> {
  @Column
  name: string;
}
