import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import Header from "@/components/comm/Header";
import About from "@/components/pages/About";
import Login from "@/components/pages/Login";

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
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        }
    ]
});
