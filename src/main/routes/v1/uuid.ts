import { Router, Request, Response } from 'express'
import { makeLogger } from '@/main/factories'
import { env } from '@/main/config'

export default (router: Router): void => {
  const logger = makeLogger(env.APPLICATION_NAME + ':uuid')

  router.post('/uuid', (req: Request, res: Response) => {
    logger.info(req.body)
    res.send('ready')
  })
}
