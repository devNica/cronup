import { GenericEntity } from './generic-entity'

export interface ProductModelEntity extends GenericEntity {
  id: number
  modelName: string
  modelDetail: string
  brandId: number
}
