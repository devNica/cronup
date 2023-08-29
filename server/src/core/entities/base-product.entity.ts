import { GenericEntity } from './generic-entity'

export interface BaseProductEntity extends GenericEntity {
  id: number
  reference: string
  basename: string
  categoryId: number
}
