import { HttpResponseModel, HttpStatusMap } from '@core/models/http/http-response.model'
import { ControllerOutputPort } from '@core/ports/output/controller-output.port'

export class GenericCreatedResponsePresenter<T> implements ControllerOutputPort<T> {
  async handleResponse (body: T, message: string): Promise<HttpResponseModel<T>> {
    return {
      statusCode: HttpStatusMap.createdRequest,
      body,
      message
    }
  }
}
