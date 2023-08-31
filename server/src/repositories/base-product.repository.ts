import { appDataSource } from '@core/config/database.config'
import { FetchBaseProductModel, InsertBaseProductModel, UpdBaseProductModel } from '@core/models/dto/base-product-dto.model'
import { BaseProductModel } from '@modules/typeorm/models/base-product.model'
import { Repository } from 'typeorm'

class BaseProductRepository {
  private readonly baseProductRepository: Repository<BaseProductModel>

  constructor () {
    this.baseProductRepository = appDataSource.getRepository(BaseProductModel)
  }

  async create (data: InsertBaseProductModel): Promise<FetchBaseProductModel | never> {
    try {
      console.log('create: ', data)
      const newBaseProduct = await this.baseProductRepository.create(data).save()
      return {
        id: newBaseProduct.id,
        basename: newBaseProduct.basename,
        reference: newBaseProduct.reference,
        categoryId: newBaseProduct.categoryId,
        isActive: newBaseProduct.isActive
      }
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async fetchAll (): Promise<FetchBaseProductModel[] | never> {
    try {
      const rows = await this.baseProductRepository.find({ relations: ['category'] })
      return rows.map(function (r): FetchBaseProductModel {
        return {
          id: r.id,
          basename: r.basename,
          reference: r.reference,
          categoryId: r.categoryId,
          createdAt: r.createdAt,
          updatedAt: r.updatedAt,
          isActive: r.isActive,
          category: r.category.categoryName
        }
      })
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async update ({ id, payload }: { id: number, payload: UpdBaseProductModel }): Promise<FetchBaseProductModel | never> {
    try {
      const product = await this.baseProductRepository.findOne({ where: { id }, relations: ['category'] })
      if (product !== null) {
        product.basename = payload.basename ?? product.basename
        product.reference = payload.reference ?? product.reference
        product.categoryId = payload.categoryId ?? product.categoryId
        product.isActive = payload.isActive ?? product.isActive
        await product.save()
        return {
          id: product.id,
          basename: product.basename,
          reference: product.reference,
          categoryId: product.categoryId,
          isActive: product.isActive,
          createdAt: product.createdAt,
          category: product.category.categoryName
        }
      }
      throw new Error('Base product not found')
    } catch (error) {
      throw new Error(String(error))
    }
  }
}

export const baseProductRepository = new BaseProductRepository()
