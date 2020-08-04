import { SERVER_URL } from '../config/server'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
const qs = require('qs')
const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 60000,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

instance.interceptors.request.use(
  config => {
    if (config.method === 'post' && !config.notQs) {
      config.data = qs.stringify(config.data)
    }
    // 调用接口请求添加token认证信息
    let token = localStorage.getItem('token')
    if (token) config.headers.authorization = token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
export const sendRequest = (url, data = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      data,
      ...config
    })
      .then(res => {
        if (res.status === 1) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
      .catch(err => {
        reject()
      })
  })
}
