import { Languages } from './languages.entity';
import { LANGUAGES_REPOSITORY } from '../../core/constants';

export const languagesProvider = [
  {
    provide: LANGUAGES_REPOSITORY,
    useValue: Languages,
  },
];
