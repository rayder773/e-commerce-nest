import { Injectable, Inject } from '@nestjs/common';
import { LANGUAGES_REPOSITORY } from '../../core/constants';
import { Languages } from './languages.entity';

@Injectable()
export class LanguagesService {
  constructor(
    @Inject(LANGUAGES_REPOSITORY)
    private readonly productRepository: typeof Languages,
  ) {}
}
