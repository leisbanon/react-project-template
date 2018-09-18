import axios from 'axios'
import qs from 'qs'

// axios 请求测试 -- 天气查询接口
export const getRequest = (params) => {return axios.get('open/api/weather/json.shtml',{params}).then(v => v.data)}
