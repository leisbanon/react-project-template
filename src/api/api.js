import axios from 'axios'
import qs from 'qs'

// axios 请求测试 -- 天气查询接口
export const getRequest = (params) => {return axios.get('api/weather/city/101030100').then(v => v.data)}
