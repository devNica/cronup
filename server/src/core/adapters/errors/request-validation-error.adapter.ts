import { HttpStatusMap } from '@core/models/http/http-response.model'
import { DefaultApplicationErrorAdapter } from './default-application-error.adapter'

export class RequestValidationErrorAdapter extends DefaultApplicationErrorAdapter {
  name = 'Invalid Request'
  statusCode = HttpStatusMap.badRequest
}
