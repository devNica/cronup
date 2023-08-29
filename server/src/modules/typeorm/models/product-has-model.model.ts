
import { ProductHasModelEntity } from '@core/entities/product-has-model.entity'
import { Entity, BaseEntity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm'
import { FormalProductModel } from './formal-product.model'
import { ProductModelModel } from './product-model.model'

@Entity({ name: 'product_has_model' })
export class ProductHasModelModel extends BaseEntity implements ProductHasModelEntity {
  @PrimaryColumn({ name: 'product_id' })
    productId: string

  @PrimaryColumn({ name: 'model_id' })
    modelId: number

  @ManyToOne(() => FormalProductModel, prd => prd.id)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
    product: FormalProductModel

  @ManyToOne(() => ProductModelModel, mdl => mdl.id)
  @JoinColumn({ name: 'model_id' })
    model: ProductModelModel
}
