import { appDataSource } from '@core/config/database.config'
import { FetchProductBrandModel, InsertProductBrandModel, UpdateProductBrandModel } from '@core/models/dto/product-brand-dto.model'
import { ProductBrandModel } from '@modules/typeorm/models/product-brand.model'
import { Repository } from 'typeorm'

class ProductBrandRepository {
  private readonly productBrandRepository: Repository<ProductBrandModel>

  constructor () {
    this.productBrandRepository = appDataSource.getRepository(ProductBrandModel)
  }

  async fetchAll (): Promise<FetchProductBrandModel[] | never> {
    try {
      return await this.productBrandRepository.find({ relations: ['models'] })
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async create (data: InsertProductBrandModel): Promise<FetchProductBrandModel | never> {
    try {
      return await this.productBrandRepository.create(data).save()
    } catch (error) {
      throw new Error(String(error))
    }
  }

  async update ({ id, payload }: { id: number, payload: UpdateProductBrandModel }): Promise<FetchProductBrandModel | never> {
    try {
      const brand = await this.productBrandRepository.findOneBy({ id })
      if (brand !== null) {
        brand.brandName = payload.brandName ?? brand.brandName
        brand.shortRef = payload.shortRef ?? brand.shortRef
        brand.isActive = payload.isActive ?? brand.isActive
        await brand.save()
        return brand
      }
      throw new Error('Brand data not found!')
    } catch (error) {
      throw new Error(String(error))
    }
  }
}

export const productBrandRepository = new ProductBrandRepository()
