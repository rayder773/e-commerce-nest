import { ApiProperty } from '@nestjs/swagger';

export class createProductAttributesDto {}

export class deleteProductAttributesDto {}

export class updateProductAttributesDto {
  @ApiProperty()
  readonly id: string;
}
