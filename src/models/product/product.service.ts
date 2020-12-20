import { Injectable, Inject } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { PRODUCT_REPOSITORY } from '../../core/constants';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}

  // async create(user: ProductDto): Promise<Product> {
  //   return await this.productRepository.create<Product>(user);
  // }
  //
  // async findOneByEmail(email: string): Promise<Product> {
  //   return await this.productRepository.findOne<Product>({ where: { email } });
  // }
  //
  // async findOneById(id: number): Promise<Product> {
  //   return await this.productRepository.findOne<Product>({ where: { id } });
  // }
}
