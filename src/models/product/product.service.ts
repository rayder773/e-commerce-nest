import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {
  createProductDto,
  deleteProductDto,
  updateProductDto,
} from './dto/product.dto';
import { PRODUCT_REPOSITORY } from '../../core/constants';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async createProduct(product: createProductDto): Promise<Product> {
    return await this.productRepository.create<Product>({
      id: uuidv4(),
      ...product,
    });
  }

  async updateProduct(
    updatedProduct: updateProductDto,
  ): Promise<[number, Product[]]> {
    return await this.productRepository.update(updatedProduct, {
      where: {
        id: updatedProduct.id,
      },
    });
  }

  async deleteProduct(params): Promise<number> {
    return await this.productRepository.destroy({
      where: {
        ...params,
      },
    });
  }
  //
  // async findOneByEmail(email: string): Promise<Product> {
  //   return await this.productRepository.findOne<Product>({ where: { email } });
  // }
  //
  // async findOneById(id: number): Promise<Product> {
  //   return await this.productRepository.findOne<Product>({ where: { id } });
  // }
}
