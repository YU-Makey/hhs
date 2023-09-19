import request from './http'
// 请求cnode主题列表数据的方法
export const getList = () => request.get({url: '/topics', params: {page: 1, limit: 20}})
