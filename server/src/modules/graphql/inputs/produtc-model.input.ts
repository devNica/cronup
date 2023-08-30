import { InsertProductModelModel, UpdateProductModelModel } from '@core/models/dto/product-model-dto.model'
import { Field, InputType, Int } from 'type-graphql'

@InputType()
class CreateProductModelInput implements InsertProductModelModel {
  @Field(() => String, { nullable: false })
    modelName: string

  @Field(() => String, { nullable: false })
    modelDetail: string

  @Field(() => Int, { nullable: false })
    brandId: number
}

@InputType()
class UpdateProductModelInput implements UpdateProductModelModel {
  @Field(() => Int, { nullable: false })
    id: number

  @Field(() => String, { nullable: false })
    modelName: string

  @Field(() => String, { nullable: false })
    modelDetail: string

  @Field(() => Int, { nullable: false })
    brandId: number

  @Field(() => Boolean, { nullable: false })
    isActive: boolean
}

export {
  CreateProductModelInput,
  UpdateProductModelInput
}
