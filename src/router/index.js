import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import("../views/DashboardView"),
  },
  {
    path: "/insertbarang",
    name: "insert",
    component: () =>
      import("../views/InsertBarangView"),
  },
  {
    path: "/detailbarang",
    name: "detailbarang",
    component: () =>
      import("../views/DetailBarangView"),
  },
  {
    path: "/history",
    name: "history",
    component: () =>
      import("../views/HistoryView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
