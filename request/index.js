import Request from './request'
import apiList from './api'
import store from '@/store/index.js'

export default function api(url, data = {}) {
	const request = new Request();
	let api = getApiObj(url);

	request.interceptor.request((config, cancel) => {
		/* 请求之前拦截器 */
		let tokenFlag = store.getters.loginFlag;
		if (api.auth && !tokenFlag) {
			store.commit('OUT_LOGIN');
			console.log('暂未登录,已阻止此次API请求~');
			throw ('暂未登录,已阻止此次API请求~');
		}
		if (tokenFlag) {
			//tokenInfo.access_token即为登录token
			// config.header.token = store.state.tokenInfo.access_token;
			config.header.Authorization =
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk';
		}
		return config
	});

	request.interceptor.response((response) => {
		/* 请求之后拦截器 */
		if (response.data.status === 401) { // 服务端返回的状态码不等于200，则reject()
			//401代表token失效
			store.commit('OUT_LOGIN');
		}

		if (response.data.status != 200 ) { // 服务端返回的状态码不等于200，则reject()
			uni.showToast({
				title: response.data.msg || '请求出错,稍后重试',
				icon: 'none',
				duration: 2000,
				mask: true
			});
		}


		// if (response.config.custom.verification) { // 演示自定义参数的作用
		//   return response.data
		// }
		return response
	}, (response) => { // 预留可以日志上报
		return response
	})

	return request.request({
		url: api.url,
		data,
		method: api.method
	})

}

function getApiObj(url) {
	let apiArray = url.split(".");
	let api = apiList;
	apiArray.forEach(v => {
		api = api[v];
	});
	return api;
}