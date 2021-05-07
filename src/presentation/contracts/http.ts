export enum StatusCode {
  STATUS_SUCCESS = 200,
  STATUS_CREATED = 201,
  STATUS_INTERNAL_ERROR = 500
}

export interface HttpResponse {
  statusCode: StatusCode
  body: any
}

export interface HttpRequest {
  body?: any
}
