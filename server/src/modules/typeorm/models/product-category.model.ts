
import { ProductCategoryEntity } from '@core/entities/product-category.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity({ name: 'product_category' })
export class ProductCategoryModel extends BaseEntity implements ProductCategoryEntity {
  @Unique(['id', 'category_name'])

  @PrimaryGeneratedColumn('increment')
    id: number

  @Column({ name: 'category_name', length: '100', unique: true, nullable: false })
    categoryName: string

  @Column({ name: 'is_active', nullable: false, default: true })
    isActive?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt?: Date

  @CreateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt?: Date
}
