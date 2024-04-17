import { createSSRApp } from "vue";
import App from "./App.vue";
import $http from "@/request/request";
export function createApp() {
  const app = createSSRApp(App);

  return {
    app,
  };
}
