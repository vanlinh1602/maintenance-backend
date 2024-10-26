import { Column, Model, Table } from 'sequelize-typescript';

import {
  ICategory,
  ICategoryCreate,
} from '../interfaces/category.service.interface';

@Table({
  tableName: 'categories',
})
export class Category extends Model<ICategory, ICategoryCreate> {
  @Column
  name: string;
}
