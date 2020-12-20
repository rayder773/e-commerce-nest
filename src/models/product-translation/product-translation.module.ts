import { Module } from '@nestjs/common';
import { ProductTranslationController } from './product-translation.controller';
import { productTranslationProvider } from './product-translation.provider';
import { ProductTranslationService } from './product-translation.service';

@Module({
  controllers: [ProductTranslationController],
  providers: [ProductTranslationService, ...productTranslationProvider],
  exports: [ProductTranslationService],
})
export class ProductTranslationModule {}
