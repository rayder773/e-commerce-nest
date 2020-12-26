import { Controller, Get } from '@nestjs/common';

@Controller('api/v1')
export class ProductController {
  @Get('allProducts')
  findAllSpeakers(): any {
    return 'all products, bitch dsadsa';
  }
}
