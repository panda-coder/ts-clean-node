import { HttpResponse, StatusCode } from '@/presentation/contracts'


const response = (body: any, statusCode: StatusCode): HttpResponse => {
  return {
    body,
    statusCode
  }
}

const created = (body: any): HttpResponse => {
  return response(body, StatusCode.STATUS_CREATED)
}

const success = (body: any): HttpResponse => {
  return response(body, StatusCode.STATUS_SUCCESS)
}

const serverError = (body: any): HttpResponse => {
  return response(body, StatusCode.STATUS_INTERNAL_ERROR)
}


export {
  response,
  created,
  success,
  serverError
}
