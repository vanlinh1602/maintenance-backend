import { Column, Model, Table } from 'sequelize-typescript';

import { IRequestCatalog, IRequestCatalogCreate } from '../types/request';

@Table({
  tableName: 'request-catalog',
})
export class RequestCatalog extends Model<
  IRequestCatalog,
  IRequestCatalogCreate
> {
  @Column
  name: string;

  @Column
  type: 'type' | 'status';

  @Column
  color: string;
}
