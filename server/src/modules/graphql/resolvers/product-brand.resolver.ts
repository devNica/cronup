import { ProductBrandModel } from '@modules/typeorm/models/product-brand.model'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { CreateProductBrandInput, UpdateProductBrandInput } from '../inputs/product-brand.input'
import { appDataSource } from '@core/config/database.config'

@Resolver()
export class ProductBrandResolver {
  @Query(() => [ProductBrandModel], { nullable: false })
  async getBrands (): Promise<ProductBrandModel[]> {
    return await ProductBrandModel.find()
  }

  @Mutation(() => ProductBrandModel)
  async createBrand (
    @Arg('data') newBrand: CreateProductBrandInput
  ): Promise<ProductBrandModel> {
    return await ProductBrandModel.create({ ...newBrand }).save()
  }

  @Mutation(() => ProductBrandModel, { nullable: true })
  async updBrand (
    @Arg('data') brd: UpdateProductBrandInput
  ): Promise<ProductBrandModel | null> {
    const brandRepository = appDataSource.getRepository(ProductBrandModel)
    const brand = await brandRepository.findOneBy({ id: brd.id })
    if (brand !== null) {
      brand.brandName = brd.brandName ?? brand.brandName
      brand.shortRef = brd.shortRef ?? brand.shortRef
      brand.isActive = brd.isActive ?? brand.isActive
      await brand.save()
    }
    return brand
  }
}
