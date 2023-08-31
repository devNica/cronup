import { ApplicationErrorModel } from '@core/error/application-error.model'
import { ControllerInputPort } from '@core/ports/input/controller-input.port'
import { Request, Response, NextFunction } from 'express'

export function expressRouteAdapter<T> (controller: ControllerInputPort<T>) {
  return async (request: Request, response: Response, next: NextFunction) => {
    return await Promise.resolve(controller.handleRequest({
      body: request.body,
      params: request.params,
      query: request.query,
      headers: request.headers
    })).then(ctrl => {
      response.status(ctrl.statusCode).json({ data: ctrl.body, message: ctrl.message })
      return next()
    }).catch((error: ApplicationErrorModel) => {
      return next(error)
    })
  }
}
