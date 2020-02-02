import axios from 'axios'
import Vue from 'vue'

const _axios = axios.create()

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