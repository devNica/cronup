import { ProductModelEntity } from '@core/entities/product-model.entity'

export type InsertProductModelModel = Pick<ProductModelEntity, 'modelName' | 'modelDetail' | 'brandId'>
export type UpdateProductModelModel = ProductModelEntity
export type FetchProductModelModel = ProductModelEntity & {
  brand?: string
}
