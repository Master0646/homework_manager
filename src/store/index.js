import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false
    },
    mutations: {
        setLogin(state) {
            state.isLogin = true
        },
    },
    actions: {
        setLogin({
            commit
        }) {
            commit("setLogin", true)
        }
    },
    modules: {}
})