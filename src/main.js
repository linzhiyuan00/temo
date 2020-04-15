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
  // 是否返回登陆页
  // let origin = window.location.origin;
  // if (response.data.code == '201') {
  //   if(window.location.href.includes('53kf')){
  //     window.location.href =
  //     "https://usermanagement.53kf.com/#/?url=" + 'https://smstemplate.53kf.com/#/home/AllList';
  //   }else{
  //     window.location.href =
  //     "https://usermanagement.71baomu.com/#/?url=" + 'https://smstemplate.71baomu.com/#/home/AllList';
  //   }
   
  //   return new Promise(() => {})// 不进入请求返回层，防止弹出提示
  // }
  // // 是否有权限
  // if (response.data.code == '66') {
  //   vm.$store.commit('changePermisson', false)
  //   return new Promise(() => {})// 不进入请求返回层，防止弹出提示
  // }

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

// // 添加换页中断请求
// router.beforeEach((to, from, next) => {
//   const source = axios.CancelToken.source();
//   clearRequest.source.cancel && clearRequest.source.cancel('canel-request');
//   clearRequest.source = source;
//   next()
// })

Vue.prototype.$game_http = instance
Vue.prototype.$movie_http = movie_instance
Vue.prototype.$axios = axios


router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
