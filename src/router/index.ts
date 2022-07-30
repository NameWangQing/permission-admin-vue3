import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    // redirect: "/menu/one",
    children: [
      {
        path: "/menu/one",
        component: () => import("@/views/Page1.vue"),
      },
      {
        path: "/menu/two",
        component: () => import("@/views/Page1.vue"),
      },
      {
        path: "/menu/three",
        component: () => import("@/views/Page1.vue"),
      },
      {
        path: "/menu/four",
        component: () => import("@/views/Page1.vue"),
      },
      {
        path: "/menu/five",
        component: () => import("@/views/Page1.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
