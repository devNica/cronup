import { HttpRequestModel } from '@core/models/http/http-request.model'
import { HttpResponseModel } from '@core/models/http/http-response.model'

export interface ControllerInputPort<T=unknown> {
  handleRequest: (request: HttpRequestModel) => Promise<HttpResponseModel<T>>
}
