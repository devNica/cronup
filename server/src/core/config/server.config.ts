import express, { Application } from 'express'
import cors from 'cors'
import http from 'http'

const appExpress: Application = express()
const server = http.createServer(appExpress.use(cors({ origin: '*' })))

export {
  appExpress,
  server
}
