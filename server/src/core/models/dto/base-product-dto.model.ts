import { BaseProductEntity } from '@core/entities/base-product.entity'

export type InsertBaseProductModel = Pick<BaseProductEntity, 'basename' | 'reference' | 'categoryId'>
export type UpdBaseProductModel = BaseProductEntity
export type FetchBaseProductModel = BaseProductEntity & {
  category?: string
}
