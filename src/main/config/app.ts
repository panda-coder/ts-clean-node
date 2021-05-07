import { env } from './index'
import { appFactory, makeLogger } from '@/main/factories'

const Application = () => {

  appFactory[env.FRAMEWORK](makeLogger(env.APPLICATION_NAME))
}

export {
  Application
}
