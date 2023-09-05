import { ProductCategoryModel } from '@modules/typeorm/models/product-category.model'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { CreateProductCategoryInput, UpdateProductCategoryInput } from '../inputs/product-category.input'
import { productCategoryRepository } from '@api/repositories/product-category.repository'
import { FetchProductCategoryModel } from '@core/models/dto/product-category-dto.model'

@Resolver()
export default class ProductCategoryResolver {
  @Query(() => [ProductCategoryModel])
  async getCategories (): Promise<FetchProductCategoryModel[]> {
    const categories = await productCategoryRepository.fetchAll()
    return categories
  }

  @Mutation(() => ProductCategoryModel)
  async createCategory (
    @Arg('data') newCategory: CreateProductCategoryInput
  ): Promise<FetchProductCategoryModel> {
    const category = await productCategoryRepository.create(newCategory)
    return category
  }

  @Mutation(() => ProductCategoryModel, { nullable: true })
  async updCategory (
    @Arg('data') ctx: UpdateProductCategoryInput
  ): Promise<FetchProductCategoryModel | null> {
    const category = await productCategoryRepository.update({ id: ctx.id, payload: { ...ctx } })
    return category
  }
}
