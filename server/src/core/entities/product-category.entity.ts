import { GenericEntity } from './generic-entity'

export interface ProductCategoryEntity extends GenericEntity {
  id: number
  categoryName: string
}
