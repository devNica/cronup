import { ProductBrandEntity } from '@core/entities/product-brand.entity'

export type InsertProductBrandModel = Pick<ProductBrandEntity, 'brandName' | 'shortRef' >
export type UpdateProductBrandModel = Pick<ProductBrandEntity, 'brandName' | 'shortRef' | 'isActive'>
export type FetchProductBrandModel = ProductBrandEntity
