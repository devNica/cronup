declare global {
  namespace NodeJS {

    interface ProcessEnv {
      SERVER_PORT: number
      NODE_ENV: 'development' | 'test' | 'production'
      DB_NAME: string
      DB_USER: string
      DB_PASSWORD: string
      DB_HOST: string
      DB_DIALECT: 'mysql' | 'postgres'
      SYNC_DATABASE: true | false
      JWT_SECRET: string
      JWT_SECRET_REFRESH: string
      JWT_SECRET_EXPIRATION_SECS: number
      JWT_SECRET_REFRESH_EXPIRATION_SECS: number
      REDIS_PASSWORD: string
      REDIS_HOST: string
      REDIS_PORT: number
      COUNTRY_API: string
    }
  }
}

export {}
