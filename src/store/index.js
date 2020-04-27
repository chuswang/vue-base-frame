import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('isLogin') || '0' // 只有1为已登录
  },
  mutations: {
    login(state) {
      state.isLogin = '1'
      localStorage.setItem('isLogin', '1')
    },
    loginOut(state) {
      state.isLogin = '0'
      localStorage.removeItem('token')
      localStorage.removeItem('isLogin')
    }
  },
  actions: {}
})
