import axios from "axios";
import qs from 'qs'

const clearRequest = {
	source: axios.CancelToken.source(),
}

const instance = axios.create({
	baseURL: location.href.includes('smstemplate.53kf.com')? 'https://ccsmanagement.53kf.com/ccsmanagement' :'https://ccsmanagement.71baomu.com/ccsmanagement',
	// baseURL: process.env.NODE_ENV=='production'? 'https://usermanagement.53kf.com' :'https://usermanagement.71baomu.com',
	// baseURL: process.env.NODE_ENV=='development'?'/api':'',
	// headers: {
	// 	"Access-Control-Allow-Origin" : "*",
	// 	// "X-Requested-With" : 'XMLHttpRequest',
	// 	// "Content-Type": "application/json;charset=utf-8",
	// 	// 'Content-Type':'application/x-www-form-urlencoded;charset=utf-8',
	// 	'Accept': '*/*',
	// },
// 	transformRequest: [function (data) {
// 		if(data&&data.is_json_data) {
// 				delete data.is_json_data;
				
// 				return JSON.stringify(data);
// 		}
// 		return qs.stringify(data);
// }],

	timeout: 30000, 
	withCredentials: true,//请求头带cookie
});
// 配置发送请求拦截器
instance.interceptors.request.use(config => {
	config.cancelToken = clearRequest.source.token;// 这句很重要
	if (config.method === 'post') {
		config.data = qs.stringify(config.data)
	}
	return config;
}, error => {
	return Promise.reject(error)
});

const movie_instance = axios.create({
	baseURL: 'http://api.douban.com/v2',
	timeout: 30000, 
	withCredentials: true,//请求头带cookie
});

movie_instance.interceptors.request.use(config => {
	config.cancelToken = clearRequest.source.token;// 这句很重要
	if (config.method === 'post') {
		config.data = qs.stringify(config.data)
	}
	return config;
}, error => {
	return Promise.reject(error)
});


export {
  instance,
  movie_instance,
	axios,
	clearRequest,
}
