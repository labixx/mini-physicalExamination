import { http } from '../utils/request.js'

// 登录
export function login(userName, password){
    return http({
        url:'/admin/app/login',
        method: 'POST',
        data: { userName, password }
    })
}
