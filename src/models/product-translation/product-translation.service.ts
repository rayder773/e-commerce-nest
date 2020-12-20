import { Injectable, Inject } from '@nestjs/common';
import { ProductTranslationDto } from './dto/product.dto';
import { PRODUCT_TRANSLATION_REPOSITORY } from '../../core/constants';
import { ProductTranslation } from './product-translation.entity';

@Injectable()
export class ProductTranslationService {
  constructor(
    @Inject(PRODUCT_TRANSLATION_REPOSITORY)
    private readonly productRepository: typeof ProductTranslation,
  ) {}
}
