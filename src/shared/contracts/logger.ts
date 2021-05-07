

export interface ILogger {
  log: (level: ILogger.LOG_LEVEL, description: ILogger.Description, context: ILogger.Context) => Promise<void>
  info: (description: ILogger.Description, context: ILogger.Context) => Promise<void>
  debug: (description: ILogger.Description, context: ILogger.Context) => Promise<void>
}

export namespace ILogger {
  export enum LOG_LEVEL  {
    DEBUG = 0
  }
  export type Description = string;
  export type Context = any
}
