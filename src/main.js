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
