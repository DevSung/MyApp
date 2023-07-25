import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/LoginView.vue";

let routes;
routes = [
  {
    path: '/',
    redirect: 'login',
    component: Login
  },
  {
    path: '/login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
