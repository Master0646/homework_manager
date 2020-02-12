const config = {

}

const authConfig = {
    '管理员': 24,
    '教师': 16,
    '学生': 8
}

const stageConfig = [{
        path: '/notice',
        name: '消息通知',
        parent: 'notice',
        file: 'views/Notice.vue',
        auth: 8,
        inNav: true
    },
    {
        path: '/myClass',
        name: '我的班级',
        parent: 'class',
        file: 'views/MyClass.vue',
        auth: 16,
        inNav: true
    }, {
        path: '/myCourse',
        params: ['id'],
        name: '我的课程',
        parent: 'class',
        file: 'views/MyCourse.vue',
        auth: 8,
        inNav: true
    },
    {
        path: '/course',
        params: ['classId', 'courseId'],
        name: '课程详细',
        parent: 'class',
        file: 'views/CourseDetail.vue',
        auth: 8
    },
    {
        path: '/homework',
        params: ['id'],
        name: '作业详细',
        parent: 'class',
        file: 'views/HomeworkDetail.vue',
        auth: 8
    }, {
        path: '/about',
        name: '关于系统',
        parent: 'about',
        file: 'views/About.vue',
        auth: 8,
        inNav: true
    }
]

export default {
    authConfig: authConfig,
    stageConfig: stageConfig
}