import { GenericEntity } from './generic-entity'

export interface FormalProductEntity extends GenericEntity {
  id: string
  reference: string
  productName: string
  description: string
  partNumber: string
  minInventory: number
  maxInventory: number
  applyTax: boolean
  hasImage: boolean
  brandId: number
  categoryId: number
}
