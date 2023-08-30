import { Field, InputType, Int } from 'type-graphql'

@InputType()
class CreateProductBrandInput {
  @Field(() => String, { nullable: false })
    brandName: string

  @Field(() => String, { nullable: false })
    shortRef: string
}

@InputType()
class UpdateProductBrandInput {
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
