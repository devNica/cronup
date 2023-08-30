import { ProductBrandEntity } from '@core/entities/product-brand.entity'
import { ProductModelModel } from '@modules/typeorm/models/product-model.model'

export type InsertProductBrandModel = Pick<ProductBrandEntity, 'brandName' | 'shortRef' >
export type UpdateProductBrandModel = Pick<ProductBrandEntity, 'brandName' | 'shortRef' | 'isActive'>
export type FetchProductBrandModel = ProductBrandEntity & {
  models?: ProductModelModel[]
}
