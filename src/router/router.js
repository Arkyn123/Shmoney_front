import Main from "@/pages/Main";
import Services from "@/pages/Services";
import Orders from "@/pages/Orders";
import Admin from "@/pages/Admin";
import Employee from "@/pages/Employee";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/employee",
    component: Employee,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
