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

export type RequestInterceptor = (config: Request) => Request
export type ResponseInterceptor = (response: any) => any
export type ErrorInterceptor = (err: any) => void

export class http {
    public baseUrl: string = "";

    // 默认请求配置
    private defaultConfig = {
        headers: {"Content-Type": "application/json"},
        timeout: 30000
    };

    // 请求拦截器
    private requestInterceptors: RequestInterceptor[] = [] as RequestInterceptor[];
    // 响应拦截器
    private responseInterceptors: ResponseInterceptor[] = [] as ResponseInterceptor[];
    // 错误拦截器
    private errorInterceptors: ErrorInterceptor[] = [] as ErrorInterceptor[];
    public interceptors = {
        request: {
            use: (ri: RequestInterceptor) => {
                this.requestInterceptors.push(ri)
            }
        },
        response: {
            use: (ri: ResponseInterceptor) => {
                this.responseInterceptors.push(ri)
            }
        },
        error: {
            use: (ri: ErrorInterceptor) => {
                this.errorInterceptors.push(ri)
            }
        }
    }

    public request(options: Request) {
        let _this = this
        // 请求拦截器
        for(let ri of _this.requestInterceptors) {
            options = ri(options)
        }
        return new Promise((resolve, reject) => {
            let url: string = _this.baseUrl + options.url
            let headers = options.headers? Object.assign(_this.defaultConfig.headers, options.headers) : _this.defaultConfig.headers
            let timeout = options.timeout?options.timeout: _this.defaultConfig.timeout
            uni.request({
                url: url,
                method: options.method?options.method : DEFAULT_METHOD,
                header: headers,
                timeout: timeout,
                data: options.body,
                success: (res: UniApp.RequestSuccessCallbackResult) => {
                    // 响应拦截器
                    for(let ri of _this.responseInterceptors) {
                        res = ri(res)
                    }
                    resolve(res)
                },
                fail: (err: UniApp.GeneralCallbackResult) => {
                    // 错误拦截器
                    for(let ri of _this.errorInterceptors) {
                        ri(err)
                    }
                    reject(err)
                }
            })
        })
    }

    get(url:string, params?:any, headers?:any, timeout?:number) {
        return this.request({
            url: url,
            method: "GET",
            body: params,
            headers: headers,
            timeout: timeout
        })
    }

    post(url:string, data?:any, headers?:any, timeout?:number) {
        return this.request({
            url: url,
            method: "POST",
            body: data,
            headers: headers,
            timeout: timeout
        })
    }

    put(url:string, params?:any, headers?:any, timeout?:number) {
        return this.request({
            url: url,
            method: "PUT",
            body: params,
            headers: headers,
            timeout: timeout
        })
    }

    delete(url:string, data?:any, headers?:any, timeout?:number) {
        return this.request({
            url: url,
            method: "DELETE",
            body: data,
            headers: headers,
            timeout: timeout
        })
    }
}

export const $http = new http