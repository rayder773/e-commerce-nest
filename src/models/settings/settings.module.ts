import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { settingsProvider } from './settings.provider';
import { SettingsService } from './settings.service';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService, ...settingsProvider],
  exports: [SettingsService],
})
export class SettingsModule {}
