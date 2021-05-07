import { env } from './index'
import { appFactory } from '@/main/factories'

const Application = () => {
  appFactory[env.FRAMEWORK]()
}

export {
  Application
}
