import api from './base'
import axios from '@/utils/axios'

export function login(data: any) {
  return axios({
    url: api.login,
    method: 'post',
    data
  })
}
export function userinfo(data: any) {
  return axios({
    url: api.userinfo,
    method: 'get',
    data
  })
}
