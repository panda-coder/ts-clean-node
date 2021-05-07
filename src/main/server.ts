
import { env, setupMiddleware, setupRoutes, setupServer } from './config'

import express from 'express'


(async () => {
  const app = express()
  setupMiddleware(app)
  setupRoutes(app)

    
  const server = app.listen(env.SERVER_PORT, () => { 
    console.log(`Server running at http://localhost:${env.SERVER_PORT}`) 
  })
  setupServer(server)
})()

