import debug from 'debug'

import { ILogger } from '@/shared/contracts'
import { HttpContext } from '@/main/helpers'


class DebugLogAdapter implements ILogger {
  protected debugInstance
  protected infoInstance
  protected errorInstance

  constructor(title: string) {
    this.debugInstance = debug(title)
    this.infoInstance = this.debugInstance.extend('info')
    this.errorInstance = this.debugInstance.extend('error')
  }

  async log(level: ILogger.LOG_LEVEL, description: ILogger.Description, context: ILogger.Context): Promise<void>  {
    const requestId = HttpContext.get('REQUEST_ID')

    const log = {
      level,
      description,
      context,
      requestId
    }

    this.debugInstance(log)
  }
  async info (description: ILogger.Description, context: ILogger.Context): Promise<void> {
    return this.infoInstance(description, context ?? '')
  }
  async debug (description: ILogger.Description, context: ILogger.Context): Promise<void> {
    return this.infoInstance(description, context ?? '')
  }
  async error (description: ILogger.Description, context: ILogger.Context): Promise<void> {
    return this.errorInstance(description, context ?? '')
  }
}

export {
  DebugLogAdapter
}
