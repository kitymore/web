import Axios from 'axios'
import { ElMessage } from 'element-plus'
import { useStore } from '../store'

const baseURL = 'https://api.gher.com'
const store = useStore()

const axios = Axios.create({
  baseURL,
  timeout: 50000 // 请求超时 50s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (config: any) => {
    /**
     * 根据项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     *  // let each request carry token
      // ['X-Token'] is a custom headers key
      //  please modify it according to the actual situation
     */
    if (store.state.token) {
      config.headers['X-Token'] = store.state.token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    const res = response.data
    return res
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      // console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
