let Mock = require('mockjs')

let users = {
    '20175533422': {
        number: '20175533422',
        name: '郭文涛',
        sex: '男',
        courses: [1]
    }
}

let courses = {
    '1': {
        id: 1,
        name: 'J2EE企业级框架开发教程',
        lecturer: '黄锵',
        description: 'Java Web后端开发框架学习教程，带你走进神奇的框架世界。'
    }
}

let courseStudent = {
    1: {
        course: 1,
        students: ['20175533422']
    }
}

let homeworks = {
    1: {
        id: 1,
        title: "课业一",
        description: "就是第一次课业"
    }
}

let courseHomeworks = [{
    courseId: 1,
    homeworkId: 1
}]

function getHomeworksByCourseId(id) {
    let h = []
    courseHomeworks.forEach(item => {
        if (item.courseId == id) {
            h.push(homeworks[item.homeworkId])
        }
    })
    return h
}

function getCourseDetailById(id) {
    const course = courses[id]
    const homeworks = getHomeworksByCourseId(id)
    return {
        course,
        homeworks
    }
}


Mock.mock(RegExp("/api/courses/*"), "get", function (request) {
    let id = request.url.match(/\d+/)
    if (id) {
        return getCourseDetailById(id)
    }
    return null
})