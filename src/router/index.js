import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layout/index";
import EmptyLayout from "../layout/empty";

Vue.use(VueRouter);

const routes = [
  {
    name: "Dashboard",
    component: MainLayout,
    icon: "mdi-monitor-dashboard",
    path: "",
    open: true,
    children: [
      {
        name: "Home",
        component: () => import("../views/Dashboard/Home"),
        path: ""
      }
    ]
  },
  {
    name: "Notification",
    component: MainLayout,
    icon: "mdi-bell-outline",
    subtitle: "Components",
    path: "/notification",
    open: false,
    children: [
      {
        name: "Notification-Simple",
        component: () => import("../views/Components/Notification/Simple"),
        path: "simple"
      }
    ]
  },
  {
    name: "Auth",
    component: EmptyLayout,
    icon: "mdi-clipboard-account-outline",
    subtitle: "Pages",
    path: "/auth",
    open: false,
    children: [
      {
        name: "Register",
        component: () => import("../views/Pages/Auth/Register"),
        path: "register"
      },
      {
        name: "Login",
        component: () => import("../views/Pages/Auth/Login"),
        path: "login"
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
