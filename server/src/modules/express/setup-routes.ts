import { ControllerModel } from '@core/models/controller.model'
import { Application } from 'express'

export default async function setupRoutes (app: Application, routes: ControllerModel[]): Promise<void> {
  routes.forEach(r => {
    app.use(r.path, r.controller)
  })
}
