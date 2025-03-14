/**
 * 接口列表文件
 * auth代表接口是否需要token
 */
export default {
    /** 获取天气 **/
    test: {
    	url: 'api?version=v9&appid=23035354&appsecret=8YvlPNrz',
    	auth: false,
    	method: 'GET',
    	// desc: '初始化数据',
    },
    
	/** 初始化 ↓ **/
	init: {
		url: 'index/init',
		auth: false,
		method: 'GET',
		// desc: '初始化数据',
	},

	/** 历史记录 ↓ **/
	history: {
		url: '/history/getList',
		auth: true,
		method: 'POST',

	},
	// 订单
	order: {
		url: '/order/getList',
		auth: true,
		method: 'POST',

	},
	// 商品
	goods: {
		url: '/goods/getList',
		auth: true,
		method: 'POST',

	},

	/** 用户 ↓ **/
	user: {
		info: {
			url: 'user',
			auth: true,
			method: 'GET',
			// desc: '用户信息',
		},

		profile: {
			url: 'user/profile',
			auth: true,
			method: 'POST',
			// desc: '修改用户信息',
		},

		changeMobile: {
			url: 'user/changemobile',
			auth: true,
			method: 'POST',
			// desc: '修改手机号',
		},

	},
	
	/** 短信 ↓ **/
	sms: {
		send: {
			url: 'sms/send',
			auth: false,
			method: 'POST',
			// desc: '发送短信',
		},
	},

};
