import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'hms',
    redirect: '/notice',
    component: () => import('../components/layout/AdminLayout.vue'),
    children: [{
            path: "/notice",
            name: '消息通知',
            component: () => import('../views/Notice.vue')
        },
        {
            path: '/myCourse',
            name: '课程',
            component: () => import('../views/MyCourse.vue')
        },
        {
            path: '/course/:id',
            name: '课程',
            component: () => import('../views/CourseDetail.vue')
        },
        {
            path: '/homework/:id',
            name: '课程',
            component: () => import('../views/HomeworkDetail.vue')
        }, {
            path: '/about',
            name: '关于系统',
            component: () => import('../views/About.vue')
        }
    ]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router