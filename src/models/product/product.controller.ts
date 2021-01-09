import { Body, Controller, Get, Post } from '@nestjs/common';
import { createProductDto } from './dto/product.dto';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@ApiTags('Products')
@Controller('api/v1')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('findAllProducts')
  findAllProducts(): any {
    return 'all products, bitch dsadsa';
  }

  @Post('createProduct')
  createProduct(@Body() createProductDto: createProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }
}
