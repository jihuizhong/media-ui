import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import Header from "@/components/comm/Header";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: HomePage
        },
        {
            path: "/header",
            name: "Header",
            component: Header
        }
    ]
});
