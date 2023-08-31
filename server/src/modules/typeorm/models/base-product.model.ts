import { BaseProductEntity } from '@core/entities/base-product.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { ProductCategoryModel } from './product-category.model'
import { ObjectType, Field, Int } from 'type-graphql'

@Entity({ name: 'base_product' })
@ObjectType()
export class BaseProductModel extends BaseEntity implements BaseProductEntity {
  @Unique(['id', 'reference'])

  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
    id: number

  @Column({ length: 50, nullable: false, unique: true })
  @Field(() => String)
    reference: string

  @Column({ length: 150, nullable: false })
  @Field(() => String)
    basename: string

  @Column({ name: 'is_active', nullable: false, default: true })
  @Field(() => Boolean)
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
  @Field(() => Date)
    createdAt?: Date

  @CreateDateColumn({ name: 'updated_at', nullable: true })
  @Field(() => Date)
    updatedAt?: Date

  @PrimaryColumn({ name: 'category_id' })
  @Field(() => Int)
    categoryId: number

  @ManyToOne(() => ProductCategoryModel, (ctg) => ctg.id)
  @JoinColumn({ name: 'category_id' })
  @Field(() => String)
    category: ProductCategoryModel
}
