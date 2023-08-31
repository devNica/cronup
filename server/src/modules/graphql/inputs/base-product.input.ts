import { InsertBaseProductModel, UpdBaseProductModel } from '@core/models/dto/base-product-dto.model'
import { Field, InputType, Int } from 'type-graphql'

@InputType()
class CreateBaseProductInput implements InsertBaseProductModel {
  @Field(() => String, { nullable: false })
    basename: string

  @Field(() => String, { nullable: false })
    reference: string

  @Field(() => Int, { nullable: false })
    categoryId: number
}

@InputType()
class UpdateBaseProductInput implements UpdBaseProductModel {
  @Field(() => Int, { nullable: false })
    id: number

  @Field(() => String, { nullable: false })
    reference: string

  @Field(() => String, { nullable: false })
    basename: string

  @Field(() => Int, { nullable: false })
    categoryId: number

  @Field(() => Boolean, { nullable: false })
    isActive?: boolean
}

export {
  CreateBaseProductInput,
  UpdateBaseProductInput
}
