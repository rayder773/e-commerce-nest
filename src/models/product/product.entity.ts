import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { ProductAttributes } from '../productAttributes/productAttributes.entity';

@Table({
  paranoid: true,
  deletedAt: 'destroyTime',
})
export class Product extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
  })
  id: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
  })
  compareAtPrice: number;

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

  @HasMany(() => ProductAttributes)
  productAttributes: ProductAttributes[];
}
