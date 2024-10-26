import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ICategory } from '../interfaces/category.service.interface';
import { CategoryService } from '../services/category.service';

@Controller()
export class CategoryApiController {
  constructor(private readonly categoryServices: CategoryService) {}

  @Get('/get/all')
  async getCategories(): Promise<ICategory[]> {
    const categorys = await this.categoryServices.getCategories();
    return categorys.map((category) => category.dataValues);
  }

  @Get('/get/:id')
  async getCategory(@Param('id') id: string): Promise<ICategory> {
    const category = await this.categoryServices.getCategory({ id });
    return category.dataValues;
  }

  @Post('/get')
  async getCategoryByFilter(
    @Body() filter: Partial<ICategory>,
  ): Promise<ICategory> {
    const category = await this.categoryServices.getCategory(filter);
    return category.dataValues;
  }

  @Post('/create')
  async createCategory(
    @Body() data: { category: Partial<ICategory> },
  ): Promise<ICategory> {
    const newCategory = await this.categoryServices.createCategory(
      data.category,
    );
    return newCategory.dataValues;
  }

  @Post('/update')
  async updateCategory(
    @Body() data: { id: string; category: ICategory },
  ): Promise<{ success: boolean }> {
    const success = await this.categoryServices.updateCategory(
      data.id,
      data.category,
    );
    return { success };
  }

  @Post('/delete')
  async deleteCategory(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.categoryServices.deleteCategory(data.id);
    return { success };
  }
}
