import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router/router";

const app = createApp(App);
const api = axios.create({ baseURL: "http://localhost:5000" });
app.config.globalProperties.$api = api;
app.config.globalProperties.$axios = axios;

app.mixin({
  data() {
    return {
      api: api,
    };
  },
});

app.use(router).mount("#app");

export { axios, api };
