// 引入vue实例 和vuex模块
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// 导出vuex树
export default new Vuex.Store({
  // vuex状态
  state: {
    // 登录状态
    Login:true,
    // 是否是管理员
    isadmin:true
  },
  // 只有muntation才能改变state状态
  mutations: {
    // 改变登录状态
    LOGIN_STATE(state,login){
      state.Login = login;
    },
    // 改变权限状态
    ADMIN_STATE(state,admin){
      state.isadmin = admin;
    }
  },
  // 派发action来触发muntation
  actions: {
    // 触发改变登录状态的mutation
    update_loginstate(context,login){
      context.commit('LOGIN_STATE',login);
    },
    // 触发改变权限状态的mutation
    update_isadmin(context,admin){
      context.commit('ADMIN_STATE',admin);
    }
  },
  modules: {}
});
