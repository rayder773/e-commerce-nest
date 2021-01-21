import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { deleteProductDto, updateProductDto } from '../product/dto/product.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Category } from './categories.entity';
import {createCategoryDto, updateCategoryDto} from './dto/category.dto';

@ApiTags('Categories')
@Controller('api/v1')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('getAllCategories')
  getAllCategories(): any {
    return this.categoriesService.getAllCategories();
  }

  @Post('createCategory')
  createProduct(
    @Body() createProductDto: createCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createProductDto);
  }

  @Put('updateCategory')
  updateProduct(
    @Body() updatedCategory: updateCategoryDto,
  ): Promise<[number, Category[]]> {
    return this.categoriesService.updateCategory(updatedCategory);
  }

  @Delete('deleteCategory')
  @ApiProperty()
  deleteProduct(@Body() params: deleteProductDto): Promise<number> {
    return this.categoriesService.deleteCategory(params);
  }
}
