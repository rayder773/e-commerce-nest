import { Product } from './product.entity';
import { PRODUCT_REPOSITORY } from '../../core/constants';

export const productProvider = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
  },
];
