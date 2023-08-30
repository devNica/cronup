import 'reflect-metadata'
import 'source-map-support/register'
import 'module-alias/register'
import HttpServerExpress from '@modules/express/http-server.module'
import constants from '@core/shared/constants'
import { appExpress, server } from '@core/config/server.config'
import { typeormInstance } from '@modules/typeorm/typeorm.module'
import GraphqlApolloServer from '@modules/graphql/apollo-server.module'

const { SERVER_PORT } = constants

void startServer()

async function startServer (): Promise<void> {
  /** inicializar conexion a la base de ddatos */
  await typeormInstance.connect()
    .then(() => console.log('Connect database success'))
    .catch(err => console.error(err))

  /** inicializar Apollo Server */
  const apollo = new GraphqlApolloServer(appExpress)
  await apollo.start()

  /** inicializar servidor http */
  const httpServer = new HttpServerExpress(SERVER_PORT, appExpress, server)
  await httpServer.start()
}
