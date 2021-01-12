import { ApiProperty } from '@nestjs/swagger';

export class createProductDto {
  @ApiProperty()
  readonly quantity: number;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly compareAtPrice: number;
}

export class deleteProductDto {
  @ApiProperty()
  readonly id: string;
}

export class updateProductDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly quantity: number;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly compareAtPrice: number;
}
