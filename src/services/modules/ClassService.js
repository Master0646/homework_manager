import {
    get
} from '@/services/utils/axios'

class ClassService {

    async getClass(id) {
        return (await get(`/api/class/${id}`)).data
    }

}

export default new ClassService()