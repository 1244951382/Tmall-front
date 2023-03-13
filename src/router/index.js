import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/store";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "Login",
    component: () => import('../views/loginPage')
},
    {
        path: "/register",
        name: "Register",
        component: () => import('../views/registerPage')
    },
    {
        path: "/home",
        name: "Home",
        component: () => import('../views/homePage')
    },
    {
        path: "/about",
        name: "About",
        component: () => import('../views/aboutPage')
    },
    {
        path: "/detail",
        name: "Detail",
        component: () => import('../views/itemDetailPage')
    },
    {
        path: "/person",
        name: "Person",
        component: () => import('../views/personPage')
    },
    {
        path: "/shopcart",
        name: "Shopcart",
        component: () => import('../views/shopcartPage')
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//提供一个重置路由的方法
export const resetRouter = () => {
    router.matcher = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
}


export default router;
