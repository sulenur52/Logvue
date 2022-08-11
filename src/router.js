import { createRouter, createWebHistory } from "vue-router";
import Login from './pages/Login-log.vue';
import signup from './pages/signup-nup.vue';

const routes = [
    { path: '/login', component: Login},
    { path: '/signup', component: signup},
];

const router =createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
