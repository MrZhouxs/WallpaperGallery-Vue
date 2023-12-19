import axios from "axios";

// 创建axios实例
const http = axios.create({
  baseURL: '/api',
  // 跨域请求时是否需要访问凭证
  withCredentials: false,
  // 请求超时时间
  timeout: 60 * 1000,
  // 可以设置统一的headers、cookies
})

// 请求头拦截器，可以在http请求之前添加统一的东西
http.interceptors.request.use(config => {
  config.headers['token'] = "token...";
  return config;
});

// 请求返回体拦截器，可以在http请求返回后统一先处理数据
http.interceptors.response.use(response  => {
  return response;
}, error => {
  return error;
})

export default http;
