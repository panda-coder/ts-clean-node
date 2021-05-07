
import express from 'express'
import { env, setupMiddleware, setupRoutes, setupServer } from '@/main/config'
import { ILogger } from '@/shared/contracts'


const makeExpress = (logger: ILogger) => {
  const app = express()
  setupMiddleware(app)
  setupRoutes(app)

    
  const server = app.listen(env.SERVER_PORT, () => { 
    logger.info(`Server running at http://localhost:${env.SERVER_PORT}`) 
  })
  setupServer(server, logger)
}

const appFactory = {
  express: makeExpress
}


export {
  makeExpress,
  appFactory
}
