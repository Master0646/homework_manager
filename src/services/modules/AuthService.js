import {
    post
} from '@/services/utils/axios'

class AuthService {

    async login(loginForm) {
        return (await post('/auth', loginForm))
    }

}

export default new AuthService()