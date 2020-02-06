import Vue from "vue";
import VueRouter from "vue-router";
import Game from "../views/game/Game.vue";
import Movie from "../views/movie/Movie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game
  },
  {
    path: "/Movie",
    name: "Movie",
    component:Movie
   
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
