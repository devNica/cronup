import { FetchProductModelModel } from '@core/models/dto/product-model-dto.model'
import { FetchAllProductModelOutput } from '@api/repositories/product-model.repository'

export interface ProductModelServiceI {
  getAllModels: () => Promise<FetchProductModelModel[] | never>
}

export class ProductModelService implements ProductModelServiceI {
  constructor (
    private readonly repository: FetchAllProductModelOutput
  ) {}

  async getAllModels (): Promise<FetchProductModelModel[] | never> {
    return await this.repository.fetchAll()
  }
}
