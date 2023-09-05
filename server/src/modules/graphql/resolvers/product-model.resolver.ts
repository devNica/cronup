import { ProductModelModel } from '@modules/typeorm/models/product-model.model'
import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql'
import { CreateProductModelInput, UpdateProductModelInput } from '../inputs/produtc-model.input'
import { productModelRepository } from '@api/repositories/product-model.repository'
import { FetchProductModelModel } from '@core/models/dto/product-model-dto.model'

@Resolver()
export default class ProductModelResolver {
  @Query(() => [ProductModelModel])
  async getModels (): Promise<FetchProductModelModel[]> {
    const models = await productModelRepository.fetchAll()
    return models
  }

  @Query(() => ProductModelModel, { nullable: false })
  async getModelById (
    @Arg('id', () => Int)
      id: number
  ): Promise<FetchProductModelModel> {
    const model = await productModelRepository.fetchById({ id })
    return model
  }

  @Mutation(() => ProductModelModel)
  async updateModel (
    @Arg('data') ctx: UpdateProductModelInput
  ): Promise<FetchProductModelModel> {
    const model = await productModelRepository.update({ id: ctx.id, payload: { ...ctx } })
    return model
  }

  @Mutation(() => ProductModelModel)
  async createModel (
    @Arg('data') newModel: CreateProductModelInput
  ): Promise<FetchProductModelModel> {
    const model = await productModelRepository.create(newModel)
    return model
  }
}
