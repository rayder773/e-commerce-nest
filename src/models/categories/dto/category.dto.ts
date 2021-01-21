import { ApiProperty } from '@nestjs/swagger';

export class createCategoryDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty({
    default: null,
  })
  readonly parentId: number;
}

export class deleteCategoryDto {
  @ApiProperty()
  readonly id: string;
}

export class updateCategoryDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly parentId: number;
}
