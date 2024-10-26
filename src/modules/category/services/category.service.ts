import { Inject, Injectable } from '@nestjs/common';

import { Category } from '../database/category.entity';
import {
  ICategory,
  ICategoryService,
} from '../interfaces/category.service.interface';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: typeof Category,
  ) {}

  async getCategory(filter: Partial<ICategory>): Promise<Category> {
    return this.categoryRepository.findOne({
      where: filter,
    });
  }

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  async createCategory(category: Partial<ICategory>): Promise<Category> {
    return this.categoryRepository.create(category);
  }

  async updateCategory(
    id: string,
    category: Partial<Category>,
  ): Promise<boolean> {
    const updated = await this.categoryRepository.update(category, {
      where: {
        id,
      },
    });
    return updated[0] > 0;
  }

  async deleteCategory(categoryId: string): Promise<boolean> {
    const deleted = await this.categoryRepository.destroy({
      where: {
        id: categoryId,
      },
    });
    return deleted > 0;
  }
}
