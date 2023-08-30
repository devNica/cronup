import { ProductBrandModel } from '@modules/typeorm/models/product-brand.model'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { CreateProductBrandInput, UpdateProductBrandInput } from '../inputs/product-brand.input'
import { productBrandRepository } from '@repositories/product-brand.repository'
import { FetchProductBrandModel } from '@core/models/dto/product-brand-dto.model'

@Resolver()
export default class ProductBrandResolver {
  @Query(() => [ProductBrandModel], { nullable: false })
  async getBrands (): Promise<FetchProductBrandModel[]> {
    const brands = await productBrandRepository.fetchAll()
    return brands
  }

  @Mutation(() => ProductBrandModel)
  async createBrand (
    @Arg('data') newBrand: CreateProductBrandInput
  ): Promise<FetchProductBrandModel> {
    const brand = await productBrandRepository.create(newBrand)
    return brand
  }

  @Mutation(() => ProductBrandModel, { nullable: true })
  async updBrand (
    @Arg('data') ctx: UpdateProductBrandInput
  ): Promise<FetchProductBrandModel | null> {
    const brand = await productBrandRepository.update({ id: ctx.id, payload: { ...ctx } })
    return brand
  }
}
