import axios from "axios";

const http = axios.create({
    baseURL: 'https://v3pz.itndedu.com/v3pz',
    timeout: 10000,
    headers: {"terminal": "h5"}
})

// 添加拦截器
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('h5_token')
    // 不需要添加token的api
    const whiteUrl = ['/login']
    if (token && !whiteUrl.includes(config.url)) {
        config.headers['h-token'] = token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function onFulfilled(response) {
    // 对接口异常的数据，给用户提示
    if (response.data.code === -1) {
        
    }
    if (response.data.code === -2) {
        localStorage.removeItem('h5_token')
        localStorage.removeItem('h5_userInfo')
        window.location.href = window.location.origin
    }
    return response;
}, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default http