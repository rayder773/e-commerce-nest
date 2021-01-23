import {Table, Column, Model, DataType, ForeignKey, HasMany} from 'sequelize-typescript';
import {Product} from "../product/product.entity";
import {ProductTranslation} from "../product-translation/product-translation.entity";

@Table
export class ProductAttributes extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: +new Date(),
  })
  createdAt: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: +new Date(),
  })
  updatedAt: number;

  @HasMany(() => ProductTranslation)
  productTranslations: ProductTranslation[];

  @ForeignKey(() => Product)
  product_id: string;
}
