import {createSSRApp} from "vue";
import App from "./App.vue";

import uViewPlus from 'uview-plus';

import * as Pinia from "pinia";
import {createUnistorage} from "pinia-plugin-unistorage";

export function createApp() {
    const app = createSSRApp(App);

    const store = Pinia.createPinia()
    store.use(createUnistorage())

    app.use(store)
    app.use(uViewPlus)

    return {
        app,
        Pinia,
    };
}
