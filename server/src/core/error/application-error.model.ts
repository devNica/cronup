export interface ApplicationErrorModel {
  statusCode: number
  message: string
  messages?: string[]
  name?: string
  stack?: Error['stack']
}
