import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {
  createProductDto,
  deleteProductDto,
  updateProductDto,
} from './dto/product.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@ApiTags('Products')
@Controller('api/v1')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('getAllProducts')
  getAllProducts(): any {
    return this.productService.getAllProducts();
  }

  @Post('createProduct')
  createProduct(@Body() createProductDto: createProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @Put('updateProduct')
  updateProduct(
    @Body() updatedProduct: updateProductDto,
  ): Promise<[number, Product[]]> {
    return this.productService.updateProduct(updatedProduct);
  }

  @Delete('deleteProduct')
  @ApiProperty()
  deleteProduct(@Body() params: deleteProductDto): Promise<number> {
    return this.productService.deleteProduct(params);
  }
}
