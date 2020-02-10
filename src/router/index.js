import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './routes'
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'hms',
    redirect: '/notice',
    component: () => import('@/components/layout/AdminLayout.vue'),
    children: homeRouter
}, {
    path: '/login',
    name: '登录',
    component: () => import('@/views/Login.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {

    if (!store.state.isLogin && to.meta.auth > 0) {
        next({
            path: '/login'
        })
        return
    }

    if (to.name) {
        document.title = to.name
    }

    next()
})

export default router