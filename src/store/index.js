import Vue from 'vue'
import Vuex from 'vuex'

import config from '@/config'



Vue.use(Vuex)

const getter = {
    getAuth(state) {
        return config.authConfig[state.user.role.name]
    }
}

export default new Vuex.Store({
    state: {
        isLogin: false,
        user: {},
        token: null
    },
    mutations: {
        setLoginAndUserInfo(state, userInfo) {
            state.isLogin = true
            state.user = userInfo
        },
    },
    actions: {
        setLoginAndUserInfo({
            commit
        }, userInfo) {
            commit("setLoginAndUserInfo", userInfo)
        }
    },
    modules: {},
    getters: getter
})