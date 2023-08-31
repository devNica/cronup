import { RequestValidationErrorAdapter } from '@core/adapters/errors/request-validation-error.adapter'
import { FetchProductModelModel } from '@core/models/dto/product-model-dto.model'
import { HttpRequestModel } from '@core/models/http/http-request.model'
import { HttpResponseModel } from '@core/models/http/http-response.model'
import { ControllerInputPort } from '@core/ports/input/controller-input.port'
import { ControllerOutputPort } from '@core/ports/output/controller-output.port'
import { ProductModelServiceI } from '@api/services/product-model.service'

export class ProductController implements ControllerInputPort<FetchProductModelModel[] | never> {
  constructor (
    private readonly service: ProductModelServiceI,
    private readonly presenter: ControllerOutputPort<FetchProductModelModel[]>
  ) {}

  async handleRequest (_request: HttpRequestModel<{}>): Promise<HttpResponseModel<FetchProductModelModel[]>> {
    try {
      const models = await this.service.getAllModels()
      return await this.presenter.handleResponse(models, 'success')
    } catch (error) {
      throw new RequestValidationErrorAdapter(String(error))
    }
  }
}
