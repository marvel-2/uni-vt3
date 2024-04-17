type Method = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT"

const DEFAULT_METHOD: Method = "GET"

export interface Headers {
    [key: string]: string | string[];
}

export interface Params {
    [key: string]: any
}

export interface Request {
    url: string,
    method: Method,
    body?: any,
    headers?: any,
    timeout?: number,
}