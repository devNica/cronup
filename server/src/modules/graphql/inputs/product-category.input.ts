import { Field, InputType, Int } from 'type-graphql'

@InputType()
class CreateProductCategoryInput {
  @Field(() => String, { nullable: false })
    categoryName: string
}

@InputType()
class UpdateProductCategoryInput {
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
