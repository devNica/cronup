/* eslint-disable @typescript-eslint/no-misused-promises */
import { expressRouteAdapter } from '@core/adapters/express/express-route.adapter'
import { productFactory } from '@api/factories/product-factory'
import { Router } from 'express'

const productRouter: Router = Router()

productRouter.get('/model', expressRouteAdapter(productFactory))

export default productRouter
