import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import UserInfo from "../views/UserInfo.vue";
import Collect from "../views/Collect.vue";
import AddInformation from "../views/AddInformation.vue";

import Game from "../views/game/Game.vue";
import Movie from "../views/movie/Movie.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    hasChildren: true,
    redirect: {
      name: 'Game'
    },
    children: [
      {
        path: "/Game",
        name: "Game",
        component: Game
      },
      {
        path: "/Movie",
        name: "Movie",
        component: Movie
      },
      {
        path: "/Login",
        name: "Login",
        component: Login
      },
      {
        path: "/UserInfo",
        name: "UserInfo",
        component: UserInfo
      },
      {
        path: "/Collect",
        name: "Collect",
        component: Collect
      },
      {
        path: "/AddInformation",
        name: "AddInformation",
        component: AddInformation
      },
    ]
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
