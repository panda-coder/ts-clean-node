import { ILogger } from '@/shared/contracts'
import { DebugLogAdapter } from '@/main/adapters/logger'

const makeLogger = (title?: string): ILogger => {
  return new DebugLogAdapter(title || '')
}


export {
  makeLogger
}
