import { createRouter, createWebHistory } from 'vue-router'
import JoinView from "@/views/JoinView.vue";
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
    component: JoinView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
