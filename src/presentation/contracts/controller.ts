import { HttpRequest, HttpResponse } from './index'

export interface HttpController {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
