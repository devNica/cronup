import { Entity, BaseEntity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm'
import { FormalProductModel } from './formal-product.model'
import { ProductHasImageEntity } from '@core/entities/product-has-image.entity'
import { FileModel } from './file.model'

@Entity({ name: 'product_has_image' })
export class ProductHasImageModel extends BaseEntity implements ProductHasImageEntity {
  @PrimaryColumn({ name: 'product_id' })
    productId: string

  @PrimaryColumn({ name: 'file_id' })
    fileId: string

  @ManyToOne(() => FormalProductModel, prd => prd.id)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
    product: FormalProductModel

  @ManyToOne(() => FileModel, fl => fl.filename)
  @JoinColumn({ name: 'file_id' })
    file: FileModel
}
