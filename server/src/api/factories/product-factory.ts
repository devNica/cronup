import { ProductController } from '@api/controllers/product.controller'
import { FetchProductModelModel } from '@core/models/dto/product-model-dto.model'
import { ControllerInputPort } from '@core/ports/input/controller-input.port'
import { GenericSuccessResponsePresenter } from '@core/presenters/generic-success.presenter'
import { fetchProductModelService } from '@api/repositories/product-model.repository'
import { ProductModelService } from '@api/services/product-model.service'

function factory (): ControllerInputPort {
  const service = new ProductModelService(
    fetchProductModelService
  )

  const presenter = new GenericSuccessResponsePresenter<FetchProductModelModel[]>()

  const controller = new ProductController(service, presenter)

  return controller
}

export const productFactory = factory()
