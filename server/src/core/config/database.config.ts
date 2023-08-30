import 'reflect-metadata'
import { DataSource } from 'typeorm'
import constants from '@core/shared/constants'

export const appDataSource = new DataSource({
  type: constants.DB_DIALECT,
  host: constants.DB_HOST,
  port: 5432,
  username: constants.DB_USER,
  password: constants.DB_PASSWORD,
  database: constants.DB_NAME,
  synchronize: constants.SYNC_DATABASE,
  logging: false,
  entities: ['src/modules/typeorm/models/**/*.ts'],
  subscribers: [],
  migrations: []
})
