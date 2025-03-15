/**
 * 接口列表文件
 * auth代表接口是否需要token
 */
export default {


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

    // 快捷词语分类
	getCateList: {
		url: '/quickReply/getList',
		auth: true,
		method: 'POST',
	},
	//模糊搜索
	autoComplete: {
		url: '/quickReply/autoComplete',
		auth: true,
		method: 'POST',
	},


};
