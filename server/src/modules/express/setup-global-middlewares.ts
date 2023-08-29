import { Application, json, urlencoded } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

export async function setupGlobalMiddlewares (app: Application): Promise<void> {
  app.use(json())
  app.use(urlencoded({ extended: false }))

  app.use(helmet())
  app.use(morgan('dev'))
}
