import { Category } from './categories.entity';
import { CATEGORIES_REPOSITORY } from '../../core/constants';

export const categoriesProvider = [
  {
    provide: CATEGORIES_REPOSITORY,
    useValue: Category,
  },
];
