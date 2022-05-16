import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("@/views/AccountView.vue"),
  },
  {
    path: "/store",
    name: "store",
    component: () => import("@/views/StoreView.vue"),
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("@/views/PayView.vue"),
  },
  {
    path: "/commodity",
    name: "commodity",
    component: () => import("@/views/CommodityView.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import("@/views/NotFoundView.vue"),
  },
];

const router = createRouter({
  // history:createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
