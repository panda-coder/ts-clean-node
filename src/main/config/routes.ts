import express from 'express'
import { Router } from 'express'


import { v1 } from '../routes'

const setupRoutes = (app: express.Application) => {
    app.use('/v1', v1)
}

export {
  setupRoutes
}
