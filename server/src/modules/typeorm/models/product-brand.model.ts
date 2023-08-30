import { ProductBrandEntity } from '@core/entities/product-brand.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { ObjectType, Field, Int } from 'type-graphql'
import { ProductModelModel } from './product-model.model'

@Entity({ name: 'product_brand' })
@ObjectType()
export class ProductBrandModel extends BaseEntity implements ProductBrandEntity {
  @Unique(['id', 'short_ref'])

  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
    id: number

  @Column({ name: 'brand_name', nullable: false })
  @Field(() => String)
    brandName: string

  @Column({ name: 'short_ref', nullable: false, unique: true })
  @Field(() => String)
    shortRef: string

  @Column({ name: 'is_active', default: true })
  @Field(() => Boolean)
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
  @Field(() => Date)
    createdAt?: Date | undefined

  @CreateDateColumn({ name: 'updated_at', nullable: true })
  @Field(() => Date)
    updatedAt?: Date | undefined

  @OneToMany(() => ProductModelModel, model => model.brand)
  @Field(() => [ProductModelModel])
    models: ProductModelModel[]
}
