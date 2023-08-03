import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "@/views/LoginView.vue";

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
        component: () => import('@/views/JoinView')
    },
    {
        path: '/main',
        // component: MainView
        component: () => import('@/views/MainView')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
