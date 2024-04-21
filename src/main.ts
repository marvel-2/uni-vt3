import {createSSRApp} from "vue";
import App from "./App.vue";

import "animate.css/animate.min.css";

import uViewPlus from 'uview-plus';

import * as Pinia from "pinia";
import {createUnistorage} from "pinia-plugin-unistorage";

import {$http} from "@/request/request";
import type {Request} from "@/request/request";
$http.baseUrl = ""; // 请求根路由
$http.interceptors.request.use((config: Request) => {
    // 请求拦截器

    return config
})
$http.interceptors.response.use((response: any) => {
    // 响应拦截器
    return response
})
$http.interceptors.error.use((err: any) => {
    // 请求错误处理拦截器
})

// 显式声明 uni 对象的类型
declare const uni: {
    [key: string]: any; // 这里根据实际情况声明 uni 对象的类型
};

export function createApp() {
    const app = createSSRApp(App);

    const store = Pinia.createPinia()
    store.use(createUnistorage())

    app.use(store)
    app.use(uViewPlus)

    uni.$http = $http

    return {
        app,
        Pinia,
    };
}
