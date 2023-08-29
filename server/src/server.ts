import 'reflect-metadata'
import 'source-map-support/register'
import 'module-alias/register'
import HttpServerExpress from '@modules/express/http-server.module'
import constants from '@core/shared/constants'
import { appExpress, server } from '@core/config/server.config'

const { SERVER_PORT } = constants

void startServer()

async function startServer (): Promise<void> {
  /** inicializar servidor http */
  const httpServer = new HttpServerExpress(SERVER_PORT, appExpress, server)
  await httpServer.start()
}
