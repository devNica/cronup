import { dbConnectionConfig } from '@core/config/database.config'
import { DataSource } from 'typeorm'

class TypeORMModule {
  private readonly typeorm: DataSource
  constructor () {
    this.typeorm = new DataSource(dbConnectionConfig)
  }

  async connect (): Promise<void> {
    try {
      await this.typeorm.initialize()
    } catch (error) {
      throw new Error(String(error))
    }
  }
}

export const typeormInstance = new TypeORMModule()
