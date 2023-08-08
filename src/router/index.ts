import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/1",
    name: "1",
    component: AboutView,
  },
  {
    path: "/2",
    name: "2",
    component: AboutView,
  },
  {
    path: "/3",
    name: "3",
    component: AboutView,
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
