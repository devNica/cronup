import { HttpResponseModel } from '@core/models/http/http-response.model'

export interface ControllerOutputPort<T> {
  handleResponse: (body: T, message: string) => Promise<HttpResponseModel<T>>
}
