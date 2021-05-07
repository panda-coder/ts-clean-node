
import express from 'express'
import { env, setupMiddleware, setupRoutes, setupServer } from '@/main/config'


const makeExpress = () => {
  const app = express()
  setupMiddleware(app)
  setupRoutes(app)

    
  const server = app.listen(env.SERVER_PORT, () => { 
    console.log(`Server running at http://localhost:${env.SERVER_PORT}`) 
  })
  setupServer(server)
}

const appFactory = {
  express: makeExpress
}


export {
  makeExpress,
  appFactory
}
