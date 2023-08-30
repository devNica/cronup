import { NonEmptyArray } from 'type-graphql'
import ProductBrandResolver from './product-brand.resolver'
import ProductCategoryResolver from './product-category.resolver'
import ProductModelResolver from './product-model.resolver'

const resolvers: NonEmptyArray<Function> = [ProductBrandResolver, ProductCategoryResolver, ProductModelResolver]

export default resolvers
