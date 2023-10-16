import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import JoinView from "@/views/JoinView.vue";
import MainView from "@/views/MainView.vue";

let routes;
routes = [
    {
        path: '/',
        redirect: 'login',
        component: LoginView
    },
    {
        path: '/login',
        component: LoginView
    },
    {
        path: '/join',
        component: JoinView
    },
    {
        path: '/main',
        component: MainView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
