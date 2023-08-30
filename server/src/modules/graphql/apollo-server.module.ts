import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import { Application } from 'express'
import { buildSchema } from 'type-graphql'
import resolvers from './resolvers'

export default class GraphqlApolloServer {
  private apolloServer: ApolloServer

  constructor (
    private readonly appExpress: Application
  ) {}

  private async setupSchemas (): Promise<void> {
    this.apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers,
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
