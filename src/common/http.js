// 引入axios和qs包
import axios from "axios";
import qs from 'qs'

// 初始化
const clearRequest = {
	source: axios.CancelToken.source(),
}
// 进行游戏axios基础配置
const instance = axios.create({
	// 默认url
	baseURL:'',
	// 超时时间
	timeout: 30000, 
	withCredentials: true,//请求头带cookie
});
// 配置游戏axios发送请求拦截器及返回数据处理
instance.interceptors.request.use(config => {
	config.cancelToken = clearRequest.source.token;
	if (config.method === 'post') {
		config.data = qs.stringify(config.data)
	}
	return config;
}, error => {
	return Promise.reject(error)
});
// 配置电影axios基础配置
const movie_instance = axios.create({
	baseURL: 'http://api.douban.com/v2',
	timeout: 30000, 
	withCredentials: true,//请求头带cookie
});

// 配置电影axios发送请求拦截器及返回数据处理
movie_instance.interceptors.request.use(config => {
	config.cancelToken = clearRequest.source.token;
	if (config.method === 'post') {
		config.data = qs.stringify(config.data)
	}
	return config;
}, error => {
	return Promise.reject(error)
});

// 导出
export {
  instance,
	movie_instance,
	// 没有配置过的原生axios
	axios,
	clearRequest,
}
