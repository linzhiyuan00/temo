// 引入vue实例和vuerouter模块
import Vue from "vue";
import VueRouter from "vue-router";

// 引入各个页面
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import UserInfo from "../views/UserInfo.vue";
import Collect from "../views/Collect.vue";
import AddInformation from "../views/AddInformation.vue";
import Info from "../views/Info.vue";
import Movie_info from "../views/Movie_info.vue";

import Game from "../views/game/Game.vue";
import Movie from "../views/movie/Movie.vue";


Vue.use(VueRouter);
// 配置路由
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
      {
        path: "/Info/:id",
        name: "Info",
        component: Info
      },
      {
        path: "/Movie_info/:id",
        name: "Movie_info",
        component: Movie_info
      },
    ]
  }
];
const router = new VueRouter({
  routes
});

// 导出
export default router;
