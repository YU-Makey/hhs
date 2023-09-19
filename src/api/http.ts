import axios from "axios";
import { ElLoading } from 'element-plus';
// 定义配置项 基础路径和超时时间
const config = {
  baseURL: "http://shiyansong.cn:8888/api/private/v1",
  timeout: 5000,
};
// let loading:any
class Request {
  //    定义一个字段是咱们 axios实例
  instance: any;
  
  constructor(config: any) {
    // 创建一个axios实例
    this.instance = axios.create(config);
    //   请求拦截器
    this.instance.interceptors.request.use((config: any) => {
        ElLoading.service({
            text: '加载中',
            background: 'rgb(255, 255, 0)',
            fullscreen:true
          })
      return config;
    });
    //  响应拦截器
    this.instance.interceptors.response.use((res: any) => {
        setTimeout(() => {
            let loading = ElLoading.service({fullscreen:true})
            loading.close()
          }, 2000)
      return res;
    });
  }
  //   二次封装get put delet post方法
  get(url: string, params: any) {
   return this.instance.get(url,{params});
  }

  post(url: string, params: any) {
   return  this.instance.post(url, params);
  }
}

export default  new  Request(config)