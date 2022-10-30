import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/main/HomeView.vue";

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
      import(/* webpackChunkName: "about" */ "../views/main/AboutView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/pay/CartView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/member/LoginView.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("@/views/member/AccountView.vue"),
  },
  {
    path: "/store",
    name: "store",
    component: () => import("@/views/shop/StoreView.vue"),
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("@/views/pay/PayView.vue"),
  },
  {
    path: "/remittance",
    name: "remittance",
    component: () => import("@/views/pay/RemittanceView.vue"),
  },
  {
    path: "/commodity/:name",
    component: () => import("@/views/shop/CommodityView.vue"),
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

router.beforeEach((to) => {
  if (
    (to.name == "cart" || to.name == "account") &&
    localStorage.getItem("token") == ""
  ) {
    return { name: "login" };
  } 
});

export default router;
