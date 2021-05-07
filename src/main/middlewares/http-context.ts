import * as express from 'express'
import HttpContextHelper from '../helpers/http-context'

const HttpContext =(req: express.Request, res: express.Response, next: () => void) => {
  const ns = HttpContextHelper.context()
  ns.run(() => next())
}

export {
  HttpContext
}
