import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { ProductBrandModel } from './product-brand.model'
import { FormalProductEntity } from '@core/entities/formal-product.entity'
import { ProductCategoryModel } from './product-category.model'

@Entity({ name: 'formal_product' })
export class FormalProductModel extends BaseEntity implements FormalProductEntity {
  @Unique(['id'])

  @PrimaryGeneratedColumn('increment')
    id: string

  @Column({ nullable: false, unique: true })
    reference: string

  @Column({ name: 'product_name', nullable: false })
    productName: string

  @Column({ name: 'description', nullable: false })
    description: string

  @Column({ name: 'part_number', nullable: false })
    partNumber: string

  @Column('decimal', { precision: 11, scale: 2, name: 'min_inventory' })
    minInventory: number

  @Column('decimal', { precision: 11, scale: 2, name: 'max_inventory' })
    maxInventory: number

  @Column('bool', { name: 'apply_tax' })
    applyTax: boolean

  @Column('bool', { name: 'has_image' })
    hasImage: boolean

  @Column('bool', { name: 'is_active', default: true })
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt?: Date

  @CreateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt?: Date

  @PrimaryColumn({ name: 'brand_id' })
    brandId: number

  @PrimaryColumn({ name: 'category_id' })
    categoryId: number

  @ManyToOne(() => ProductBrandModel, (brand) => brand.id)
  @JoinColumn({ name: 'brand_id', referencedColumnName: 'id' })
    brand: ProductBrandModel

  @ManyToOne(() => ProductCategoryModel, (ctg) => ctg.id)
  @JoinColumn({ name: 'category_id' })
    category: ProductCategoryModel
}
