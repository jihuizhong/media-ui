// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/main.css"; // 全局css

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

axios.defaults.baseURL = "http://127.0.0.1:8081/api/";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
});
