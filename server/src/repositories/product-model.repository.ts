import { appDataSource } from '@core/config/database.config'
import { FetchProductModelModel, InsertProductModelModel, UpdateProductModelModel } from '@core/models/dto/product-model-dto.model'
import { ProductModelModel } from '@modules/typeorm/models/product-model.model'
import { Repository } from 'typeorm'

export interface FetchAllProductModelOutput {
  fetchAll: () => Promise<FetchProductModelModel[] | never>
}

export default class ProductModelRepository implements FetchAllProductModelOutput {
  private readonly productModelRepository: Repository<ProductModelModel>

  constructor () {
    this.productModelRepository = appDataSource.getRepository(ProductModelModel)
  }

  async create (data: InsertProductModelModel): Promise<FetchProductModelModel | never> {
    try {
      const newModel = await this.productModelRepository.create(data).save()
      return {
        id: newModel.id,
        modelName: newModel.modelName,
        modelDetail: newModel.modelDetail,
        isActive: newModel.isActive,
        createdAt: newModel.createdAt,
        brandId: newModel.brandId
      }
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async fetchAll (): Promise<FetchProductModelModel[] | never> {
    try {
      const rows = await this.productModelRepository.find({ relations: ['brand'] })
      const result = rows.map(function (r): FetchProductModelModel {
        return {
          id: r.id,
          modelName: r.modelName,
          modelDetail: r.modelDetail,
          isActive: r.isActive,
          createdAt: r.createdAt,
          brandId: r.brandId,
          brand: r.brand.brandName
        }
      })
      return result
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async fetchById ({ id }: { id: number }): Promise<FetchProductModelModel | never> {
    try {
      const result = await this.productModelRepository.findOne({ where: { id }, relations: ['brand'] })

      if (result !== null) {
        return {
          id: result.id,
          modelName: result.modelName,
          modelDetail: result.modelDetail,
          brandId: result.brandId,
          isActive: result.isActive,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
          brand: result.brand.brandName
        }
      }
      throw new Error('Model not found')
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async update ({ id, payload }: { id: number, payload: UpdateProductModelModel }): Promise<FetchProductModelModel | never> {
    try {
      const model = await this.productModelRepository.findOne({ where: { id }, relations: ['brand'] })
      if (model !== null) {
        model.modelName = payload.modelName ?? model.modelName
        model.modelDetail = payload.modelDetail ?? model.modelDetail
        model.isActive = payload.isActive ?? model.isActive
        model.brandId = payload.brandId ?? model.brandId
        await model.save()
        return {
          id: model.id,
          modelName: model.modelName,
          modelDetail: model.modelDetail,
          brandId: model.brandId,
          isActive: model.isActive,
          createdAt: model.createdAt,
          updatedAt: model.updatedAt,
          brand: model.brand.brandName
        }
      }
      throw new Error('Model not found')
    } catch (error) {
      throw new Error(String(error))
    }
  }
}

const productModelRepository = new ProductModelRepository()
const fetchProductModelService: FetchAllProductModelOutput = productModelRepository

export {
  productModelRepository,
  fetchProductModelService
}
