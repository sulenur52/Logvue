import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/pages/HomePage")
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/LoginPage")
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/pages/RegisterPage")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;