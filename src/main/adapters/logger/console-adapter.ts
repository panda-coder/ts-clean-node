import { ILogger } from '@/shared/contracts'

import { HttpContext } from '@/main/helpers'

class ConsoleLogAdapter implements ILogger {
  async log(level: ILogger.LOG_LEVEL, description: ILogger.Description, context: ILogger.Context): Promise<void>  {
    const requestId = HttpContext.get('REQUEST_ID')

    const log = {
      level,
      description,
      context,
      requestId
    }

    console.log(log)
  }
  async info (description: ILogger.Description, context: ILogger.Context): Promise<void> {
    return this.log(ILogger.LOG_LEVEL.DEBUG, description, context)
  }
  async debug (description: ILogger.Description, context: ILogger.Context): Promise<void> {
    return this.log(ILogger.LOG_LEVEL.DEBUG, description, context)
  }
}

export {
  ConsoleLogAdapter
}
