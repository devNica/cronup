import { FileEntity } from '@core/entities/file.entity'
import { Entity, BaseEntity, Unique, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'file' })
export class FileModel extends BaseEntity implements FileEntity {
  @Unique(['id'])

  @PrimaryGeneratedColumn('uuid')
    filename: string

  @Column({ name: 'filesize', nullable: false })
    filesize: number

  @Column({ name: 'filetype', nullable: false, length: 10 })
    filetype: string

  @Column('bytea', { nullable: false })
    binary: Buffer
}
