import { Module } from '@nestjs/common';
import { ProductAttributesController } from './productAttributes.controller';
import { productAttributesProvider } from './productAttributes.provider';
import { ProductAttributesService } from './productAttributes.service';

@Module({
  controllers: [ProductAttributesController],
  providers: [ProductAttributesService, ...productAttributesProvider],
  exports: [ProductAttributesService],
})
export class ProductAttributesModule {}
