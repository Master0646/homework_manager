import {
    get
} from "@/services/utils/axios";

class CourseService {

    async getCourses(id) {
        return await get(`/api/course/${id}`);
    }

    async getDetail(classId, courseId, page) {
        return await get(`/api/course/detail/${classId}/${courseId}/${page}`)
    }

}

export default new CourseService()