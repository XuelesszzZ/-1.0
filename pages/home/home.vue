<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN -->
		<u-navbar :is-back="false" title="会话列表" :background="{ background: '#f8f8f8'  }" title-color="#404133"
			:border-bottom="false" z-index="1001">

		</u-navbar>
		<!-- #endif -->
		<view class="status">
		</view>
		<selectInput :list="selectList" :list-key="'name'" :show.sync="selectShow" @on-select="checkSelect"
			@close="closeSelect" />
		<searchInput />
		<u-swipe-action :show="item.show" :index="index" v-for="(item, index) in list" btn-width="160" :key="item.id"
			@click="click" @open="open" :options="options">
			<view class="item" :class="item.isTop ? 'bg_view' : ''" hover-class="message-hover-class"
				@tap="(e) => linkTo(item,index)">

				<image mode="aspectFill" :src="item.headimgurl" />
				<!-- 			<block v-if="item.room_type == 2 || item.room_type == 3">

					<view class="avator">
						<view class="iconfont ic_system-news">系</view>
					</view>

				</block> -->
				<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
				<view class="right u-border-bottom title-wrap">
					<view class="right_top">
						<view class="right_top_name u-line-1" v-if="item.room_type == 1 ">{{ item.title }}</view>
						<view class="right_top_name u-line-1" v-if="item.room_type == 2 || item.room_type == 3">系统客服
						</view>
						<view class="right_top_time ">{{ item.final_time }}</view>
					</view>
					<view class="right_btm ">
						<view class="u-line-1">{{item.final_content}}</view>
						<view class=""></view>
					</view>
				</view>
			</view>
		</u-swipe-action>
	</view>
</template>

<script>
	import searchInput from '@/components/searchInput/index.vue';
	import selectInput from '@/components/selectInput/selectInput.vue';
	import {
		formatTime
	} from '@/filter/index.js'
	import WebSocketUtil from '@/socket.js'
	export default {
		components: {
			searchInput,
			selectInput
		},
		data() {
			return {

				list: [
					{
						final_content: "21",
						final_content_type: 1,
						final_time: "2025-03-11 14:40:40",
						headimgurl: "https://cloud-chongwu.oss-cn-beijing.aliyuncs.com/image/chongwu/20250206/1738821858_ABKrla.png",
						room_id: 5,
						room_type: 1,
						shop_id: 15,
						title: "邹文远宠物店",
						unread_num: 0,
						user_id: 47,
					}
				],
				selectShow: false,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d',
						fontSize: '24rpx'
					}
				}],

				status: 'disconnected',
				ws: null,
				socketList: {
					type: "message_list",
					token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk"

				}

			};
		},
		//进来触发链接

		onShow() {
			this.list.map((val, idx) => {
				this.list[idx].show = false;
			});
			this.init()
			//async+await+Promise 让<if判断>在<getWeatherList返回结果后>执行


		},
		methods: {


			// 离开关闭连接
			onHide: function () {
				if (this.ws) {
					this.ws.close()
				}

			},

			init() {
				// 初始化 WebSocket
				this.ws = new WebSocketUtil('wss://192.168.0.119:8088', {
					maxReconnect: 5, // 最大重连次数
					reconnectDelay: 2000, // 重连间隔
					heartbeatInterval: 30000 // 心跳间隔
				});

				// 监听事件
				this.ws.on('open', () => {
					console.log('WebSocket 连接成功');
					this.status = 'connected';
					this.ws.send(this.socketList);
					this.ws.startHeartbeat(this.socketList);
				});
				this.ws.on('close', () => this.status = 'disconnected');
				this.ws.on('error', (err) => console.error('WebSocket 发生错误:', err));
				this.ws.on('message', (data) => {

					// this.list = this.convertTimestampsToDates(data.data.list);
					// this.list = JSON.parse((JSON.stringify(this.list)))

					console.log(this.list);


				});
			},

			// 转换函数
			convertTimestampsToDates(dataArray, key = 'final_time') {

				return dataArray.map(item => {

					return {
						...item,
						[key]: formatTime(item[key]), // 转换时间戳
					};
				});
			},
			//打开或者关闭弹窗
			showSelect() {
				this.selectShow = !this.selectShow;
			},
			//action 点击事件
			click(index, index1) {
				if (index1 == 0) {
					this.list.splice(index, 1);
				}
			},
			//action 打开事件
			open(index) {

				this.list[index].show = true;
				this.list.map((val, idx) => {
					if (index != idx) this.list[idx].show = false;
				});
			},
			//点击导航栏自定义按钮
			onNavigationBarButtonTap({
				index
			}) {
				if (index == 0) {
					this.showSelect()
				}
			},
			//跳转
			linkTo(item, index) {
				this.list[index].show = false;
				const data = JSON.stringify(item)
				this.$u.route({
					url: 'pages/chat/chat',
					params: {
						data: data
					}
				});

			},
			//关闭弹窗
			closeSelect() {
				//小程序兼容
				this.selectShow = false;
			},
			//扫码
			checkSelect(index) {
				if (index == 1) {
					uni.vibrateLong();
					//扫码
					uni.scanCode({
						success: function (res) {
							// console.log('条码内容：' + res.result);
							this.$u.toast('条码类型:', res.scanType);
						}
					});
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.content {
		.item {
			width: 750rpx;
			display: flex;
			align-items: center;

			// padding: 20rpx;
			image {
				width: 76rpx;
				height: 76rpx;
				margin: 20rpx;
				border-radius: 12rpx;
				flex: 0 0 76rpx;
			}

			.avator {
				width: 76rpx;
				height: 76rpx;
				margin: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				background: #4191ea;
				border-radius: 30%;

				.iconfont {


					color: #fff;
					font-size: 34rpx;
				}
			}

			.right {
				overflow: hidden;
				flex: 1 0;
				padding: 20rpx 20rpx 20rpx 0;

				&_top {
					display: flex;
					justify-content: space-between;

					&_name {
						font-size: 28rpx;
						color: $u-main-color;
						// flex: 0 0 450rpx;
						overflow: hidden;
					}

					&_time {
						font-size: 20rpx;
						color: $u-light-color;

					}
				}

				&_btm {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 22rpx;
					color: $u-tips-color;
					padding-top: 15rpx;
				}
			}
		}

		.bg_view {
			background-color: #fafafa;
		}

		.slot-wrap {
			display: flex;
			align-items: center;
			padding: 0 30rpx;
		}
	}
</style>