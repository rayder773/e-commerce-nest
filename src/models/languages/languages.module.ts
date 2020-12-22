import { Module } from '@nestjs/common';
import { LanguagesController } from './languages.controller';
import { languagesProvider } from './languages.provider';
import { LanguagesService } from './languages.service';

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesService, ...languagesProvider],
  exports: [LanguagesService],
})
export class LanguagesModule {}
