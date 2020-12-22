import { Injectable, Inject } from '@nestjs/common';
import { SETTINGS_REPOSITORY } from '../../core/constants';
import { Settings } from './settings.entity';

@Injectable()
export class SettingsService {
  constructor(
    @Inject(SETTINGS_REPOSITORY)
    private readonly productRepository: typeof Settings,
  ) {}
}
