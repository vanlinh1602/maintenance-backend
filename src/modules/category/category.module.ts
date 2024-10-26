import { Module } from '@nestjs/common';

import { Category } from './database/category.entity';
import { CategoryService } from './services/category.service';

@Module({
  imports: [],
  exports: [
    CategoryService,
    {
      provide: 'CATEGORY_REPOSITORY',
      useValue: Category,
    },
  ],
  providers: [
    CategoryService,
    {
      provide: 'CATEGORY_REPOSITORY',
      useValue: Category,
    },
  ],
  controllers: [],
})
export class CategoryModule {}
