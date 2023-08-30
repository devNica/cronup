
import { ProductCategoryEntity } from '@core/entities/product-category.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { ObjectType, Field, Int } from 'type-graphql'

@Entity({ name: 'product_category' })
@ObjectType()
export class ProductCategoryModel extends BaseEntity implements ProductCategoryEntity {
  @Unique(['id', 'category_name'])

  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
    id: number

  @Column({ name: 'category_name', length: '100', unique: true, nullable: false })
  @Field(() => String)
    categoryName: string

  @Column({ name: 'is_active', nullable: false, default: true })
  @Field(() => Boolean)
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
  @Field(() => Date)
    createdAt?: Date

  @CreateDateColumn({ name: 'updated_at', nullable: true })
  @Field(() => Date)
    updatedAt?: Date
}
