import { ProductBrandEntity } from '@core/entities/product-brand.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity({ name: 'product_brand' })
export class ProductBrandModel extends BaseEntity implements ProductBrandEntity {
  @Unique(['id', 'short_ref'])

  @PrimaryGeneratedColumn('increment')
    id: number

  @Column({ name: 'brand_name', nullable: false })
    brandName: string

  @Column({ name: 'short_ref', nullable: false, unique: true })
    shortRef: string

  @Column({ name: 'is_active', default: true })
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt?: Date | undefined

  @CreateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt?: Date | undefined
}
