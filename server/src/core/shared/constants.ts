import 'dotenv/config'

export default {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  SERVER_PORT: process.env.SERVER_PORT ?? 4400,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  SYNC_DATABASE: true,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
  JWT_SECRET_EXPIRATION_SECS: process.env.JWT_SECRET_EXPIRATION_SECS,
  JWT_SECRET_REFRESH_EXPIRATION_SECS: process.env.JWT_SECRET_REFRESH_EXPIRATION_SECS,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_PORT: process.env.REDIS_PORT,
  COUNTRY_API: process.env.COUNTRY_API
}
