import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Login",
    path: "/",
   
    component: () => import("@/pages/Login-log")
  },
  {
    name: "signup",
    path: "/",
    component: () => import("@/pages/signup-nup")
  },
  {
   
  }
];

const router = createRouter({
  routes,
 
  history: createWebHashHistory()
});

export default router;


