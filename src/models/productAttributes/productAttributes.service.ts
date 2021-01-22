import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { updateProductAttributesDto } from './dto/productAttributes.dto';
import { PRODUCTATTRIBUTES_REPOSITORY } from '../../core/constants';
import { ProductAttributes } from './productAttributes.entity';

@Injectable()
export class ProductAttributesService {
  constructor(
    @Inject(PRODUCTATTRIBUTES_REPOSITORY)
    private readonly productAttributesRepository: typeof ProductAttributes,
  ) {}

  async getAllProductAttributess(): Promise<ProductAttributes[]> {
    return await this.productAttributesRepository.findAll();
  }

  async createProductAttributes(productAttributes): Promise<ProductAttributes> {
    return await this.productAttributesRepository.create<ProductAttributes>({
      id: uuidv4(),
      ...productAttributes,
    });
  }

  async updateProductAttributes(
    updatedProductAttributes: updateProductAttributesDto,
  ): Promise<[number, ProductAttributes[]]> {
    return await this.productAttributesRepository.update(
      updatedProductAttributes,
      {
        where: {
          id: updatedProductAttributes.id,
        },
      },
    );
  }
}
