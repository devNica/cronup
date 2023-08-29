import { BaseProductEntity } from '@core/entities/base-product.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { ProductCategoryModel } from './product-category.model'

@Entity({ name: 'base_product' })
export class BaseProductModel extends BaseEntity implements BaseProductEntity {
  @Unique(['id', 'reference'])

  @PrimaryGeneratedColumn('uuid')
    id: number

  @Column({ length: 50, nullable: false, unique: true })
    reference: string

  @Column({ length: 150, nullable: false })
    basename: string

  @Column({ name: 'is_active', nullable: false, default: true })
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt?: Date

  @CreateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt?: Date

  @PrimaryColumn({ name: 'category_id' })
    categoryId: number

  @ManyToOne(() => ProductCategoryModel, (ctg) => ctg.id)
  @JoinColumn({ name: 'category_id' })
    category: ProductCategoryModel
}
