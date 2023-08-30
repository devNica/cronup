import { ProductCategoryEntity } from '@core/entities/product-category.entity'

export type InsertProductCategoryModel = Pick<ProductCategoryEntity, 'categoryName'>
export type UpdateProductCategoryModel = ProductCategoryEntity
export type FetchProductCategoryModel = ProductCategoryEntity
