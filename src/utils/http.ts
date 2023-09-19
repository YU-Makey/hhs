import axios, {AxiosInstance} from 'axios'
interface ParamsConfig {
  url: string,
  params?:any,
  data?:any
}
class Request {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://cnodejs.org/api/v1",
      timeout: 10000
    })
  }

  // requestInterceptors() {
  //   this.instance.interceptors.request.use(config => {
  //     config.headers.Authorization = ""
  //     return config
  //   }, err => {
  //     throw new Error(err)
  //   })
  // }

  // responseInterceptors() {
  //   this.instance.interceptors.response.use(result => {
  //     return result.data
  //   }, err => {
  //     throw new Error(err)
  //   })
  // }

  // interceptors() {
  //   this.requestInterceptors()
  //   this.responseInterceptors()
  // }

  async get(options: ParamsConfig):Promise<{data: any, success: boolean}> {
    let res = await this.instance({
      method: 'get',
      url: options.url,
      params: options.params
    })
    return {
      data: res.data.data,
      success: res.data.success
    }
  }
}

export default new Request()