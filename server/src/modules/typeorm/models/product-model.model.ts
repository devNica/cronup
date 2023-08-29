import { ProductModelEntity } from '@core/entities/product-model.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { ProductBrandModel } from './product-brand.model'

@Entity({ name: 'product_model' })
export class ProductModelModel extends BaseEntity implements ProductModelEntity {
  @Unique(['id'])

  @PrimaryGeneratedColumn('increment')
    id: number

  @Column({ name: 'model_name', nullable: false })
    modelName: string

  @Column({ name: 'model_detail', nullable: false })
    modelDetail: string

  @Column({ name: 'is_active', default: true })
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt?: Date

  @CreateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt?: Date

  @PrimaryColumn({ name: 'brand_id' })
    brandId: number

  @ManyToOne(() => ProductBrandModel, (brand) => brand.id)
  @JoinColumn({ name: 'brand_id', referencedColumnName: 'id' })
    brand: ProductBrandModel
}
