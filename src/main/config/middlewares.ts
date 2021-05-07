import express from 'express'
import cors from 'cors'

import { HttpContext, RequestID } from '../middlewares'

const setupMiddleware = (app: express.Application) => {
  app.use(cors())
  app.use(express.json())

  app.use(HttpContext)
  app.use(RequestID)
}

export {
  setupMiddleware
}
