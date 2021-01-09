import { ApiProperty } from '@nestjs/swagger';

export class createProductDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly quantity: number;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly compareAtPrice: number;
}
