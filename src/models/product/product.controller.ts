import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProductController {
  @Get('api/allProducts')
  findAllSpeakers(): any {
    return 'all products, bitch dsadsa';
  }
}
