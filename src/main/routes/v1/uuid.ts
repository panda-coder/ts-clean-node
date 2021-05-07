import { Router, Request, Response } from 'express'
import { HttpContext } from '../../helpers'
import { makeLogger } from '@/main/factories'

export default (router: Router): void => {
  const logger = makeLogger()

  router.post('/uuid', (req: Request, res: Response) => {
    logger.info(req.body, [])
    res.send('ready')
  })
}
