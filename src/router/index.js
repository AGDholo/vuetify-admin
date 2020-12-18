import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "Dashboard",
    component: () => import("../views/Dashboard"),
    icon: "mdi-monitor-dashboard",
    path: "/",
    open: true,
    child: [
      {
        name: "Home",
        component: () => import("../views/Dashboard"),
        path: "home"
      },
      {
        name: "Email",
        component: () => import("../views/Dashboard"),
        path: "email"
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
    child: [
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
