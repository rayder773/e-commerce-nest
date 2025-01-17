import {Table, Column, Model, DataType, ForeignKey} from 'sequelize-typescript';
import {ProductAttributes} from "../productAttributes/productAttributes.entity";

const PRODUCT_ACTIVE = 'active';
const PRODUCT_DRAFT = 'draft';
const PRODUCT_ARCHIVED = 'archived';

@Table
export class ProductTranslation extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lang: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  description: number;

  @Column({
    type: DataType.ENUM(...getProductStatuses()),
    defaultValue: PRODUCT_ARCHIVED,
    allowNull: false,
  })
  status: string;

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

  @ForeignKey(() => ProductAttributes)
  product_attribute_id: string;
}

function getProductStatuses(): string[] {
  return [PRODUCT_ACTIVE, PRODUCT_ARCHIVED, PRODUCT_DRAFT];
}
