import { ControllerModel } from '@core/models/api/controller.model'
import { Application } from 'express'

export default async function setupRoutes (app: Application, routes: ControllerModel[]): Promise<void> {
  routes.forEach(r => {
    app.use(r.path, r.controller)
  })
}
