import Vue from "vue";
import Router from "vue-router";
import Main from "./components/main/Main.vue";
import Schedule from "./components/calendar/SchedularMain.vue";
import Board from "./components/board/BoardList.vue";
import Login from "./components/main/Login.vue";
import IntroMain from "./components/introduce/IntroMain.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/schedule/list",
      name: "shceduleList",
      component: Schedule,
    },
    {
      path: "/board/list",
      name: "boardList",
      component: Board,
    },
    {
      path: "/user/login",
      name: "boardList",
      component: Login,
    },
    {
      path: "/introduce/main",
      name: "introMain",
      component: IntroMain,
    },
  ],
});
