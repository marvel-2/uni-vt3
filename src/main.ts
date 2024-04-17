import {createSSRApp} from "vue";
import App from "./App.vue";
import $http from "@/request/request";

import uViewPlus from 'uview-plus';

export function createApp() {
    const app = createSSRApp(App);
    app.use(uViewPlus)
    return {
        app,
    };
}
