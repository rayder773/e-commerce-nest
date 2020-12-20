import { ProductTranslation } from './product-translation.entity';
import { PRODUCT_TRANSLATION_REPOSITORY } from '../../core/constants';

export const productTranslationProvider = [
  {
    provide: PRODUCT_TRANSLATION_REPOSITORY,
    useValue: ProductTranslation,
  },
];
