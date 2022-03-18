import { http } from '../utils/request.js'
// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
    return http({
        url: '/system/dict/data/type/' + dictType,
        method: 'get'
    })
}