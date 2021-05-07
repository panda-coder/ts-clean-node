import { Request, Response } from 'express'

import { HttpController, HttpRequest } from '@/presentation/contracts'
import { serverError } from '@/presentation/helpers'

export default (controller: HttpController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    try {
      const httpResponse = await controller.handle(httpRequest)
      res
        .status(httpResponse.statusCode)
        .json(httpResponse.body)
    } catch (Err) {
      const httpResponse = serverError(Err)
      res
        .status(httpResponse.statusCode)
        .json(httpResponse.body)
    }
  }
}
