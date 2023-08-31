import { NonEmptyArray } from 'type-graphql'
import ProductBrandResolver from './product-brand.resolver'
import ProductCategoryResolver from './product-category.resolver'
import ProductModelResolver from './product-model.resolver'
import BaseProductResolver from './base-product.resolver'

const resolvers: NonEmptyArray<Function> = [
  ProductBrandResolver,
  ProductCategoryResolver,
  ProductModelResolver,
  BaseProductResolver
]

export default resolvers
