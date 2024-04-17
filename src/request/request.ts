type Method = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT"


const DEFAULT_METHOD: Method = "GET"

export interface RequestType {

}

interface Config {

}

interface Request {
    url: string,
    method: Method,
    body?: any,
    headers?: any,
    timeout?: number,
}

class http {
    baseURL:string = ""

    request({}:Request) {
        return new Promise((resolve, reject) => {

        })
    }
}

const $http = new http
export default $http