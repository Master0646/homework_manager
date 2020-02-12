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

    reqConfig.headers['authorization'] = store.state.token

    // 文件上传处理
    // let hasFile = false
    // Object.keys(reqConfig.data).forEach((key) => {
    //     if (typeof reqConfig.data[key] === 'object') {
    //         const item = reqConfig.data[key]
    //         if (item instanceof FileList || item instanceof File || item instanceof Blob) {
    //             hasFile = true
    //         } else if (Object.prototype.toString.call(item) === '[object Object]') {
    //             reqConfig.data[key] = JSON.stringify(reqConfig.data[key])
    //         }
    //     }
    // })

    // if (hasFile) {
    //     const formData = new FormData()
    //     Object.keys(reqConfig.data).forEach(key => {
    //         formData.append(key, reqConfig.data[key])
    //     })
    //     reqConfig.data = formData
    // }

    return reqConfig
}, error => {
    Promise.reject(error)
})

_axios.interceptors.response.use(async (res) => {
    console.log("response", res)
    if (res.status === 200) {
        if (res.config.url === '/auth') {
            store.state.token = res.headers.authorization
        }
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