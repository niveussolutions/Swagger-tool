export interface PostmanCollection {
  info: Info;
  item?: (ItemEntity)[] | null;
  event?: (EventEntity)[] | null;
  variable?: (HeaderEntityOrUrlencodedEntityOrVariableEntity)[] | null;
}
export interface Info {
  _postman_id: string;
  name: string;
  schema: string;
  _exporter_id: string;
}
export interface ItemEntity {
  name: string;
  request: Request;
  response?: (ResponseEntity | null)[] | null;
}
export interface Request {
  method: string;
  header?: (HeaderEntityOrUrlencodedEntityOrVariableEntity1 | null)[] | null;
  url: Url ;
  body?: Body | null;
}
export interface HeaderEntityOrUrlencodedEntityOrVariableEntity1 {
  key: string;
  value: string;
  type: string;
}
export interface Url {
  raw: string;
  protocol: string;
  host?: (string)[] | null;
  path?: (string)[] | null;
  query?: (QueryEntityOrHeaderEntity)[] | null;
}
export interface QueryEntityOrHeaderEntity {
  key: string;
  value: string;
}
export interface Body {
  mode: string;
  formdata?: (FormdataEntity)[] | null;
  raw?: string | null;
  options?: Options | null;
  urlencoded?: (HeaderEntityOrUrlencodedEntityOrVariableEntity)[] | null;
}
export interface FormdataEntity {
  key: string;
  value?: string | null;
  type: string;
  src?: string | null;
  disabled?:boolean;
}
export interface Options {
  raw: Raw;
}
export interface Raw {
  language: string;
}
export interface HeaderEntityOrUrlencodedEntityOrVariableEntity {
  key: string;
  value: string;
  type: string;
  disabled?:boolean;
}
export interface ResponseEntity {
  name: string;
  originalRequest: OriginalRequestOrRequest;
  status: string;
  code: number;
  _postman_previewlanguage: string;
  header?: (QueryEntityOrHeaderEntity)[] | null;
  cookie?: (null)[] | null;
  body: string;
}
export interface OriginalRequestOrRequest {
  method: string;
  header?: (HeaderEntityOrUrlencodedEntityOrVariableEntity)[] | null;
  url: Url;
}
export interface EventEntity {
  listen: string;
  script: Script;
}
export interface Script {
  type: string;
  exec?: (string)[] | null;
}
