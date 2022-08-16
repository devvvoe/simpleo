import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main";
import Stats from "@/views/Stats";
import Team from "@/views/Team";
import Highlights from "@/views/Highlights";
import Player from "@/views/Player";
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/stats",
    component: Stats,
  },

  {
    path: "/highlights",
    component: Highlights,
  },
  {
    path: "/team/:slug",
    component: Team,
  },
  {
    path: "/player/:slug",
    component: Player,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
