import { NonEmptyArray } from 'type-graphql'
import ProductBrandResolver from './product-brand.resolver'
import ProductCategoryResolver from './product-category.resolver'

const resolvers: NonEmptyArray<Function> = [ProductBrandResolver, ProductCategoryResolver]

export default resolvers
