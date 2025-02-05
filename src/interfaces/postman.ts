// src/interface/postman.ts
export type CollectionItem = Item | ItemGroup;
export function isItemGroup(item: CollectionItem): item is ItemGroup {
  return (item as ItemGroup).item !== undefined;
}

export interface PostmanCollection {
  info: Info;
  item: Array<CollectionItem>;
  event?: Event[];
  variable?: Variable[];
  auth?: Auth | null;
  protocolProfileBehavior?: Record<string, unknown>;
}

export interface Info {
  name: string;
  _postman_id?: string;
  description?: Description;
  version?: Version;
  schema: string;
}

export type Description =
  | string
  | null
  | {
      content?: string;
      type?: string;
      version?: unknown;
    };

export type Version =
  | string
  | {
      major: number;
      minor: number;
      patch: number;
      identifier?: string;
      meta?: unknown;
    };

export interface Item {
  id?: string;
  name: string;
  description?: Description;
  variable?: Variable[];
  event?: Event[];
  request: Request;
  response?: Response[];
  protocolProfileBehavior?: Record<string, unknown>;
}

export interface ItemGroup {
  name: string;
  description?: Description;
  variable?: Variable[];
  item: Array<CollectionItem>;
  event?: Event[];
  auth?: Auth | null;
  protocolProfileBehavior?: Record<string, unknown>;
}

export interface Request {
  url: Url;
  auth?: Auth | null;
  proxy?: ProxyConfig;
  certificate?: Certificate;
  method: string;
  description?: Description;
  header?: Header[] | string;
  body?: Body | null;
}

export type Url =
  | string
  | {
      raw?: string;
      protocol?: string;
      host?: string | string[];
      path?: string | string[];
      port?: string;
      query?: QueryParam[];
      hash?: string;
      variable?: Variable[];
    };

export interface QueryParam {
  key: string | null;
  value: string | null;
  disabled?: boolean;
  description?: Description;
}

export interface Header {
  key: string;
  value: string;
  disabled?: boolean;
  description?: Description;
}

export interface Body {
  mode: "raw" | "urlencoded" | "formdata" | "file" | "graphql";
  raw?: string;
  urlencoded?: UrlEncodedParam[];
  formdata?: Array<FormDataParam | FileDataParam>;
  file?: {
    src: string | null;
    content?: string;
  };
  graphql?: unknown;
  options?: unknown;
  disabled?: boolean;
}

export interface UrlEncodedParam {
  key: string;
  value: string;
  disabled?: boolean;
  description?: Description;
}

export interface FormDataParam {
  key: string;
  value: string;
  disabled?: boolean;
  type?: "text";
  contentType?: string;
  description?: Description;
}

export interface FileDataParam {
  key: string;
  src: string | null | string[];
  disabled?: boolean;
  type: "file";
  contentType?: string;
  description?: Description;
}

export interface Response {
  id?: string;
  originalRequest: Request;
  responseTime?: number | string | null;
  timings?: Record<string, unknown> | null;
  header?: Header[] | string | null;
  cookie?: Cookie[];
  body?: string | null;
  status?: string;
  code?: number;
}

export interface Cookie {
  domain: string;
  expires?: string | number;
  maxAge?: string;
  hostOnly?: boolean;
  httpOnly?: boolean;
  name: string;
  path: string;
  secure?: boolean;
  session?: boolean;
  value: string;
  extensions?: unknown[];
}

export interface Event {
  id?: string;
  listen: string;
  script: Script;
  disabled?: boolean;
}

export interface Script {
  id?: string;
  type?: string;
  exec: string[] | string;
  src?: Url;
  name?: string;
}

export interface Auth {
  type:
    | "apikey"
    | "awsv4"
    | "basic"
    | "bearer"
    | "digest"
    | "edgegrid"
    | "hawk"
    | "noauth"
    | "oauth1"
    | "oauth2"
    | "ntlm";
  noauth?: unknown;
  apikey?: AuthAttribute[];
  awsv4?: AuthAttribute[];
  basic?: AuthAttribute[];
  bearer?: AuthAttribute[];
  digest?: AuthAttribute[];
  edgegrid?: AuthAttribute[];
  hawk?: AuthAttribute[];
  ntlm?: AuthAttribute[];
  oauth1?: AuthAttribute[];
  oauth2?: AuthAttribute[];
}

export interface AuthAttribute {
  key: string;
  value?: unknown;
  type?: string;
}

export interface ProxyConfig {
  match?: string;
  host?: string;
  port?: number;
  tunnel?: boolean;
  disabled?: boolean;
}

export interface Certificate {
  name?: string;
  matches?: string[];
  key?: {
    src: string;
  };
  cert?: {
    src: string;
  };
  passphrase?: string;
}

export interface Variable {
  id?: string;
  key?: string;
  value?: unknown;
  type?: "string" | "boolean" | "any" | "number";
  name?: string;
  description?: Description;
  system?: boolean;
  disabled?: boolean;
}
