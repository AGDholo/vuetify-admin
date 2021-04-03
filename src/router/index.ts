import Vue from "vue";
import VueRouter from "vue-router";
import HLayout from "@/layout/index.vue";
import EmptyLayout from "@/layout/empty.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Dashboard",
      component: HLayout,
      props: {
        icon: "mdi-monitor-dashboard",
        open: true
      },
      path: "",
      children: [
        {
          name: "Home",
          component: () => import("@/views/Dashboard/Home.vue"),
          path: ""
        }
      ]
    },
    {
      name: "Notification",
      component: HLayout,
      props: {
        icon: "mdi-bell-outline",
        open: false,
        subtitle: "Components"
      },
      path: "/notification",
      children: [
        {
          name: "Notification-Simple",
          component: () => import("@/views/Components/Notification/Simple.vue"),
          path: "simple"
        }
      ]
    },
    {
      name: "DataTable",
      component: HLayout,
      props: {
        icon: "mdi-table",
        open: true
      },
      path: "/data-table",
      children: [
        {
          name: "Data-Table-Simple",
          component: () => import("@/views/Components/DataTable/Simple.vue"),
          path: "simple"
        }
      ]
    },
    {
      name: "Auth",
      component: EmptyLayout,
      props: {
        icon: "mdi-clipboard-account-outline",
        subtitle: "Pages",
        open: false
      },

      path: "/auth",

      children: [
        {
          name: "Register",
          component: () => import("@/views/Pages/Auth/Register.vue"),
          path: "register"
        },
        {
          name: "Login",
          component: () => import("@/views/Pages/Auth/Login.vue"),
          path: "login"
        }
      ]
    }
  ]
});
