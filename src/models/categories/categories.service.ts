import { Injectable, Inject } from '@nestjs/common';
import { CATEGORIES_REPOSITORY } from '../../core/constants';
import { Category } from './categories.entity';
import { v4 as uuidv4 } from 'uuid';
import { updateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORIES_REPOSITORY)
    private readonly categoryRepository: typeof Category,
  ) {}

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }

  async createCategory(category): Promise<Category> {
    return await this.categoryRepository.create<Category>({
      id: uuidv4(),
      ...category,
    });
  }

  async updateCategory(
    updatedCategory: updateCategoryDto,
  ): Promise<[number, Category[]]> {
    return await this.categoryRepository.update(updatedCategory, {
      where: {
        id: updatedCategory.id,
      },
    });
  }

  async deleteCategory(params): Promise<number> {
    try {
      await this.categoryRepository.update(
        { parentId: null },
        {
          where: {
            parentId: params.id,
          },
        },
      );
    } catch (err) {
      console.error('could not update child categories');
    }

    return await this.categoryRepository.destroy({
      where: {
        ...params,
      },
    });
  }
}
