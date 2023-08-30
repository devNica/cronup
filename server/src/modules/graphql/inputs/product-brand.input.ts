import { InsertProductBrandModel, UpdateProductBrandModel } from '@core/models/dto/product-brand-dto.model'
import { Field, InputType, Int } from 'type-graphql'

@InputType()
class CreateProductBrandInput implements InsertProductBrandModel {
  @Field(() => String, { nullable: false })
    brandName: string

  @Field(() => String, { nullable: false })
    shortRef: string
}

@InputType()
class UpdateProductBrandInput implements UpdateProductBrandModel {
  @Field(() => Int)
    id: number

  @Field(() => String, { nullable: true })
    brandName: string

  @Field(() => String, { nullable: true })
    shortRef: string

  @Field(() => Boolean, { nullable: true })
    isActive: boolean
}

export {
  CreateProductBrandInput,
  UpdateProductBrandInput
}
