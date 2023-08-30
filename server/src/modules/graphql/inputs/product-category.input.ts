import { InsertProductCategoryModel, UpdateProductCategoryModel } from '@core/models/dto/product-category-dto.model'
import { Field, InputType, Int } from 'type-graphql'

@InputType()
class CreateProductCategoryInput implements InsertProductCategoryModel {
  @Field(() => String, { nullable: false })
    categoryName: string
}

@InputType()
class UpdateProductCategoryInput implements UpdateProductCategoryModel {
  @Field(() => Int, { nullable: false })
    id: number

  @Field(() => String, { nullable: true })
    categoryName: string

  @Field(() => Boolean, { nullable: true })
    isActive: boolean
}

export {
  CreateProductCategoryInput,
  UpdateProductCategoryInput
}
