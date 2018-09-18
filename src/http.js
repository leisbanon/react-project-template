import axios from 'axios'

//请求地址必须带上api，详见webpakc proxyTable configure
axios.defaults.baseURL = '/api';


/**
 * 请求拦截器--请求之前拦截处理
 * config {Object} 处理config 发送到服务器的数据
 */
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
},e => {
    return Promise.reject(e);
})

/**
 * 响应拦截器--请求完毕数据响应之后的拦截处理
 */
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
},e => {
    return Promise.reject(e);
})

export default axios;