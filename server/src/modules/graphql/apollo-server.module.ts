import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import { Application } from 'express'
import { buildSchema } from 'type-graphql'
import { TestResolver } from './resolvers/test.resolver'
import { ProductCategoryResolver } from './resolvers/product-category.resolver'
import { ProductBrandResolver } from './resolvers/product-brand.resolver'

export default class GraphqlApolloServer {
  private apolloServer: ApolloServer

  constructor (
    private readonly appExpress: Application
  ) {}

  private async setupSchemas (): Promise<void> {
    this.apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [TestResolver, ProductCategoryResolver, ProductBrandResolver],
        validate: false
      }),
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    })
  }

  async start (): Promise<void> {
    await this.setupSchemas()
    await this.apolloServer.start()
    this.apolloServer.applyMiddleware({ app: this.appExpress })
  }
}
