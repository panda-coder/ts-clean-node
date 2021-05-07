import { ILogger } from '@/shared/contracts'
import { ConsoleLogAdapter } from '@/main/adapters/logger/console-adapter'

const makeLogger = (): ILogger => {
  return new ConsoleLogAdapter()
}


export {
  makeLogger
}
