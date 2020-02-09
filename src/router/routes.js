const stageConfig = [{
        path: '/notice',
        name: '消息通知',
        parent: 'notice',
        file: 'views/Notice.vue',
    },
    {
        path: '/myClass',
        name: '我的班级',
        parent: 'class',
        file: 'views/MyClass.vue'
    }, {
        path: '/myCourse/:id',
        name: '我的课程',
        parent: 'class',
        file: 'views/MyCourse.vue'
    },
    {
        path: '/course/:id',
        name: '课程详细',
        parent: 'class',
        file: 'views/CourseDetail.vue'
    },
    {
        path: '/homework/:id',
        name: '作业详细',
        parent: 'class',
        file: 'views/HomeworkDetail.vue'
    }, {
        path: '/about',
        name: '关于系统',
        parent: 'about',
        file: 'views/About.vue'
    }
]

function deepTravel(config, fun) {
    if (Array.isArray(config)) {
        config.forEach((subConfig) => {
            deepTravel(subConfig, fun)
        })
    } else if (config.children) {
        config.children.forEach((subConfig) => {
            deepTravel(subConfig, fun)
        })
    } else {
        fun(config)
    }
}

let homeRouter = []
deepTravel(stageConfig, (viewConfig) => {
    const viewRouter = {}
    viewRouter.path = viewConfig.path
    viewRouter.name = viewConfig.name
    viewRouter.component = () => import(`@/${viewConfig.file}`)
    viewRouter.meta = {
        parent: viewConfig.parent
    }
    homeRouter.push(viewRouter)
})


export default homeRouter