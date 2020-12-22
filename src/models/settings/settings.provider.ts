import { Settings } from './settings.entity';
import { SETTINGS_REPOSITORY } from '../../core/constants';

export const settingsProvider = [
  {
    provide: SETTINGS_REPOSITORY,
    useValue: Settings,
  },
];
