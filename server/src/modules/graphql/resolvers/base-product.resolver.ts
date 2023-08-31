import { FetchBaseProductModel } from '@core/models/dto/base-product-dto.model'
import { BaseProductModel } from '@modules/typeorm/models/base-product.model'
import { baseProductRepository } from '@repositories/base-product.repository'
import { Arg, Mutation, Resolver, Query } from 'type-graphql'
import { CreateBaseProductInput, UpdateBaseProductInput } from '../inputs/base-product.input'

@Resolver()
export default class BaseProductResolver {
  @Query(() => [BaseProductModel], { nullable: false })
  async getBaseProducts (): Promise<FetchBaseProductModel[]> {
    const products = await baseProductRepository.fetchAll()
    return products
  }

  @Mutation(() => BaseProductModel)
  async createBaseProduct (
    @Arg('data') requets: CreateBaseProductInput
  ): Promise<FetchBaseProductModel> {
    const product = await baseProductRepository.create(requets)
    return product
  }

  @Mutation(() => BaseProductModel)
  async updateBaseProduct (
    @Arg('data') ctx: UpdateBaseProductInput
  ): Promise<FetchBaseProductModel> {
    const product = await baseProductRepository.update({ id: ctx.id, payload: { ...ctx } })
    return product
  }
}
