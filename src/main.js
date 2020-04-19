import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入iview组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
// 引入home组件的全局less
import '@/common/common.less'
import VueParticles from 'vue-particles'; //粒子背景插件

import {instance,movie_instance, axios, clearRequest} from './common/http';

// 添加响应拦截器(当响应回复回登陆页时跳转)
instance.interceptors.response.use(function (response) {
  // 登录失效是否返回登陆页
  let origin = window.location.origin;
  if (response.data.code == '201') {
      window.location.href =
      "http://localhost:8080/#/Game";
    return new Promise(() => {})// 不进入请求返回层，防止弹出提示
  }
  // 是否有权限
  if (response.data.code == '66') {
    vm.$store.commit('changePermisson', false)
    return new Promise(() => {})// 不进入请求返回层，防止弹出提示
  }

  return response
}, function (error) {
  if (error.message === 'canel-request') return new Promise(() => {})
  return Promise.reject(error)
})
movie_instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.message === 'canel-request') return new Promise(() => {})
  return Promise.reject(error)
})

// 将方法绑定到vue的原型上
Vue.prototype.$game_http = instance
Vue.prototype.$movie_http = movie_instance
Vue.prototype.$axios = axios
// vue router 路由守卫  跳转路由后到页面最顶端
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

// 粒子背景插件
Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
