import { ControllerModel } from '@core/models/api/controller.model'
import { Application } from 'express'
import { Server } from 'http'
import { setupGlobalMiddlewares } from './setup-global-middlewares'
import { setupProxy } from './setup-proxy'
import setupRoutes from './setup-routes'
import testRouter from '@api/routes/test.router'
import productRouter from '@api/routes/product.router'

export default class HttpServerExpress {
  private readonly controllers: ControllerModel[] = []

  constructor (
    private readonly serverPort: number,
    private readonly expressApp: Application,
    private readonly server: Server
  ) {}

  private async addController (): Promise<void> {
    this.controllers.push({ path: '/test', controller: testRouter })
    this.controllers.push({ path: '/product', controller: productRouter })
  }

  public async start (): Promise<void> {
    await this.addController()
    await setupGlobalMiddlewares(this.expressApp)
    await setupProxy(this.expressApp)
    await setupRoutes(this.expressApp, this.controllers)
    this.server.listen(this.serverPort, () => console.log('Server is running on port: ', this.serverPort))
  }
}
