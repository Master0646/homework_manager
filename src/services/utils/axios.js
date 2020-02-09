import axios from 'axios'
import Vue from 'vue'
import store from '@/store'

const _axios = axios.create()

_axios.interceptors.request.use(originConfig => {
    const reqConfig = {
        ...originConfig
    }
    console.log("request", reqConfig)
    // step1: 容错处理
    if (!reqConfig.url) {
        throw new Error({
            source: 'axiosInterceptors',
            message: 'request need url',
        })
    }

    // step2: auth 处理
    if (reqConfig.url !== '/auth') {
        // 为header戴上token
        reqConfig.headers['authorization'] = token
    }
    return reqConfig
}, error => {
    Promise.reject(error)
})

let token = ""

_axios.interceptors.response.use(async (res) => {
    if (res.status === 200) {
        token = res.headers.authorization
        return res
    }
    // 处理token失效
    return new Promise(async (resolve, reject) => {
        reject(res)
    })
}, error => {
    // eslint-disable-next-line no-console
    console.log(error)
})

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios
            }
        },
        $axios: {
            get() {
                return _axios
            }
        }
    })
}

if (!Vue.axios) {
    Vue.use(Plugin)
}

export function post(url, data = {}, params = {}) {
    return _axios({
        method: 'post',
        url,
        data,
        params,
    })
}

export function get(url, params = {}) {
    return _axios({
        method: 'get',
        url,
        params
    })
}

export function put(url, data = {}, params = {}) {
    return _axios({
        method: 'put',
        url,
        params,
        data,
    })
}

export function _delete(url, params = {}) {
    return _axios({
        method: 'delete',
        url,
        params,
    })
}

export default _axios