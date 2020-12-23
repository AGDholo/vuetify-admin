import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "Dashboard",
    component: () => import("../layout/index"),
    icon: "mdi-monitor-dashboard",
    path: "/",
    open: true,
    children: [
      {
        name: "Home",
        component: () => import("../views/Dashboard/Home"),
        path: "/"
      }
    ]
  },
  {
    name: "Data Table",
    component: () => import("../views/Dashboard"),
    icon: "mdi-table",
    subtitle: "Components",
    path: "/table",
    open: false,
    children: [
      {
        name: "Simple",
        component: () => import("../views/Dashboard"),
        path: "/simple"
      },
      {
        name: "Search",
        component: () => import("../views/Dashboard"),
        path: "/search"
      }
    ]
  },
  {
    name: "Auth Pages",
    component: () => import("../views/Dashboard"),
    icon: "mdi-clipboard-account-outline",
    subtitle: "Pages",
    path: "/auth",
    open: false,
    children: [
      {
        name: "Login",
        component: () => import("../views/Dashboard"),
        path: "/login"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
