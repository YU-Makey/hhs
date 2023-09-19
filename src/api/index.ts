import http from  "./http"
// 接口
 interface IUser {
    username:string
    password:string
 }
// 登录
 export const loginApi = (params:IUser)=>http.post("/login",params)