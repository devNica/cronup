import { Application } from 'express'

export async function setupProxy (app: Application): Promise<void> {
  app.set('trust proxy', true)
  app.disabled('x-powered-by')
}
