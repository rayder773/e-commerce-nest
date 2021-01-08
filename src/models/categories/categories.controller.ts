import { Controller, Get } from '@nestjs/common';

@Controller('')
export class CategoriesController {
  @Get('api/v1/findAllCategories')
  findAllCategories(): any {
    return 'all products, bitch dsadsa';
  }
}
