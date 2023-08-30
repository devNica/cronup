import { ProductModelEntity } from '@core/entities/product-model.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { ProductBrandModel } from './product-brand.model'
import { ObjectType, Field, Int } from 'type-graphql'

@Entity({ name: 'product_model' })
@ObjectType()
export class ProductModelModel extends BaseEntity implements ProductModelEntity {
  @Unique(['id'])

  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
    id: number

  @Column({ name: 'model_name', nullable: false })
  @Field(() => String)
    modelName: string

  @Column({ name: 'model_detail', nullable: false })
  @Field(() => String)
    modelDetail: string

  @Column({ name: 'is_active', default: true })
  @Field(() => Boolean)
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
  @Field(() => Date)
    createdAt?: Date

  @CreateDateColumn({ name: 'updated_at', nullable: true })
  @Field(() => Date)
    updatedAt?: Date

  @PrimaryColumn({ name: 'brand_id' })
  @Field(() => Int)
    brandId: number

  @ManyToOne(() => ProductBrandModel, (brand) => brand.id)
  @JoinColumn({ name: 'brand_id', referencedColumnName: 'id' })
  /** al utilizar el decorador `@Field` solo es de interes recoger una de las propiedas del modelo asociado y no todo el mapa */
  @Field(() => String)
    brand: ProductBrandModel
}
