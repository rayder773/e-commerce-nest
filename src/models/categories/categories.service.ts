import { Injectable, Inject } from '@nestjs/common';
import { CATEGORIES_REPOSITORY } from '../../core/constants';
import { Categories } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORIES_REPOSITORY)
    private readonly productRepository: typeof Categories,
  ) {}
}
