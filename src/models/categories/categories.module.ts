import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { categoriesProvider } from './categories.provider';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ...categoriesProvider],
  exports: [CategoriesService],
})
export class CategoriesModule {}
