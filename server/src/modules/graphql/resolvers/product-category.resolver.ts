import { ProductCategoryModel } from '@modules/typeorm/models/product-category.model'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { CreateProductCategoryInput, UpdateProductCategoryInput } from '../inputs/product-category.input'
import { appDataSource } from '@core/config/database.config'

@Resolver()
export class ProductCategoryResolver {
  @Query(() => [ProductCategoryModel])
  async getCategories (): Promise<ProductCategoryModel[]> {
    return await ProductCategoryModel.find()
  }

  @Mutation(() => ProductCategoryModel)
  async createCategory (
    @Arg('data') newCategory: CreateProductCategoryInput
  ): Promise<ProductCategoryModel> {
    return await ProductCategoryModel.create({ ...newCategory }).save()
  }

  @Mutation(() => ProductCategoryModel, { nullable: true })
  async updCategory (
    @Arg('data') ctg: UpdateProductCategoryInput
  ): Promise<ProductCategoryModel | null> {
    const categoryRepository = appDataSource.getRepository(ProductCategoryModel)
    const category = await categoryRepository.findOneBy({ id: ctg.id })
    if (category !== null) {
      category.categoryName = ctg.categoryName ?? category.categoryName
      category.isActive = ctg.isActive ?? category.isActive
      await category.save()
    }
    return category
  }
}
