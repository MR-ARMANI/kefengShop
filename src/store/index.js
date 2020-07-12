import Vue from 'vue'
import Vuex from 'vuex'
import login from './login.js'
import cart from './cart.js'
import order from './order.js'
import collect from './collect.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active:0, //底部导航序号
    isb:true,//显示底部
    islogin:false,//是否登录状态
    // loginimg:0//登录图片序号
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    cart,
    order,
    collect
  }
})
