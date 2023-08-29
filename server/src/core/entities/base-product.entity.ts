import { GenericEntity } from './generic-entity'

export interface BaseProductEntity extends GenericEntity {
  id: number
  baseReference: string
  baseName: string
  categoryId: number
}
