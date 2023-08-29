import { GenericEntity } from './generic-entity'

export interface ProductBrandEntity extends GenericEntity {
  id: number
  brandName: string
  shortRef: string
}
