import { v4 as uuidv4 } from 'uuid'
import * as express from 'express'
import HttpContextHelper from '../helpers/http-context'

const RequestID =(req: express.Request, res: express.Response, next: () => void) => {
  HttpContextHelper.set('REQUEST_ID', uuidv4())
  next()
}

export {
  RequestID
}
