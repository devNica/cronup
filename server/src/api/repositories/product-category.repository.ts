import { appDataSource } from '@core/config/database.config'
import { FetchProductCategoryModel, InsertProductCategoryModel, UpdateProductCategoryModel } from '@core/models/dto/product-category-dto.model'
import { ProductCategoryModel } from '@modules/typeorm/models/product-category.model'
import { Repository } from 'typeorm'

class ProductCategoryRepository {
  private readonly productCategoryRepository: Repository<ProductCategoryModel>

  constructor () {
    this.productCategoryRepository = appDataSource.getRepository(ProductCategoryModel)
  }

  async create (data: InsertProductCategoryModel): Promise<FetchProductCategoryModel | never> {
    try {
      return await this.productCategoryRepository.create(data).save()
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async update ({ id, payload }: { id: number, payload: UpdateProductCategoryModel }): Promise<FetchProductCategoryModel | never> {
    try {
      const category = await this.productCategoryRepository.findOneBy({ id })
      if (category !== null) {
        category.categoryName = payload.categoryName ?? category.categoryName
        category.isActive = payload.isActive ?? category.isActive
        await category.save()
        return category
      }
      throw new Error('Brand data not found!')
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async fetchAll (): Promise<FetchProductCategoryModel[] | never> {
    try {
      return await this.productCategoryRepository.find()
    } catch (error) {
      throw new Error(String(error))
    }
  }
}

export const productCategoryRepository = new ProductCategoryRepository()
