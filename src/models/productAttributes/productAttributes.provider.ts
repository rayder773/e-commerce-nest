import { ProductAttributes } from './productAttributes.entity';
import { PRODUCTATTRIBUTES_REPOSITORY } from '../../core/constants';

export const productAttributesProvider = [
  {
    provide: PRODUCTATTRIBUTES_REPOSITORY,
    useValue: ProductAttributes,
  },
];
