import { Optional } from 'sequelize';

import { Category } from '../database/category.entity';

export interface ICategory {
  id: string;
  name: string;
}

export type ICategoryCreate = Optional<ICategory, 'id'>;

export interface ICategoryService {
  getCategory: (filter: Partial<ICategory>) => Promise<Category>;
  getCategories: () => Promise<Category[]>;
  createCategory: (category: Partial<ICategory>) => Promise<Category>;
  updateCategory: (id: string, category: Category) => Promise<boolean>;
  deleteCategory: (categoryId: string) => Promise<boolean>;
}
