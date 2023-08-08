import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
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
    // un fichier js dédié (about.[hash].js) va être généré pour cette route
    // Ce module sera téléchargé et interprété uniquement lorsque la route sera visité par le client
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
