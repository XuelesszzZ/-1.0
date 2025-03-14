<template>
	<!-- 订单弹窗组件 -->
	<u-popup v-model="showPopup" mode="bottom" :closeable="true" :round="20" :safe-area-inset-bottom="true"
		@close="handleClose">
		<view class="order-popup-container">
			<!-- 弹窗标题 -->
			<view class="popup-header">
				<text class="title">{{title}}</text>
			</view>


			<!-- 订单列表 -->
			<scroll-view scroll-y class="order-list">
				<!-- 空状态 -->
				<u-empty v-if="orderList.length === 0" mode="list"
					icon="https://cdn.uviewui.com/uview/empty/list.png"></u-empty>

				<!-- 订单项 -->
				<view v-for="(item, index) in orderList" :key="index" class="order-item" >

					<view class="goods-spec" v-if="title !='发送商品'">
						<u-icon name="order" color="" size="28"></u-icon>
						<view class="text">
							订单编号：{{ item.order_number }}
						</view>
					</view>


					<view class="order-info">
						<u-image :src="item.thumb_url" width="145rpx" height="145rpx" radius="8"></u-image>

						<view class="order-content">
							<view class="titleBox">
								<view class="title">
									<view>
										{{  title != '发送商品'?item.shop_title:item.title}}
									</view>
									<view >
										￥{{item.price}}
									</view>
								</view>
								<view class="good_title">
									<view v-if="title !='发送商品'">
										{{item.title}}
									</view>
									<view v-if="title !='发送商品'">
										x{{item.num}}
									</view>
								</view>
							</view>
							<view class="buttonBox">

								<u-button size="mini" shape="circle"
									:custom-style="{background: '#FF4400',color: '#fff'}" @click="selectOrder(item)">发送</u-button>
							</view>

						</view>

					</view>
				</view>
			</scroll-view>

		</view>
	</u-popup>
</template>

<script>
	export default {
		props: {
			// 控制弹窗显示
			visible: {
				type: Boolean,
				default: false
			},
			title: {
				default: ''
			},
			jkid: {
				default: ''
			}
		},
		data() {
			return {
				showPopup: this.visible,
				orderList: [] // 订单数据
			};
		},
		watch: {
			visible(newVal) {
				this.showPopup = newVal;

			},
			title(newVal) {

				if (newVal == '请选择需要咨询的订单') {
					this.getOlderList(this.jkid, 'order')
				} else {
					this.getOlderList(this.jkid, 'goods')
				}
			}

		},
		methods: {

			// 加载消息
			getOlderList(page, type) {
				return new Promise((resolve, reject) => {
					this.$api(type, {
						client_id: page
					}).then(res => {

						if (res.status == 200) {
				           if(type == 'order'){
							   const transformedList = res.data.list.flatMap(order => {
							   	return order.goods_list.map(goods => ({
							   		...goods, // 展开商品信息
							   		fatherId: order.id, // 添加父级订单ID
							   		order_number: order.order_number,
							   		order_time: order.order_time,
							   		pay_time: order.pay_time,
							   		total_amount: order.total_amount,
							   		shop_id: order.shop_id,
							   		shop_title: order.shop_title
							   	}));
							   });
							   this.orderList = transformedList
						   }else{
									   this.orderList = res.data.list
						   }



						}
						resolve(true);
					}).catch((e) => {
						resolve(false);
						// console.log(e);
					});
				})

			},


			// 选择订单
			selectOrder(item) {
				if(this.title == '发送商品'){
					item.contentType = 4
				}else{
					item.contentType = 5
				}
				this.$emit('select', item);
				this.handleClose();
			},

			// 关闭弹窗
			handleClose() {
				this.showPopup = false;
				this.$emit('closeBox', false);
				this.orderList = [];
			},

			// 状态样式映射
			statusClass(status) {
				const statusMap = {
					1: 'wait-pay', // 待付款
					2: 'wait-ship', // 待发货
					3: 'completed', // 已完成
					4: 'canceled' // 已取消
				};
				return statusMap[status] || 'default';
			}
		}
	};
</script>

<style lang="scss" scoped>
	.order-popup-container {
		height: 80vh;
		padding: 30rpx;

		.popup-header {
			padding: 20rpx 30rpx 30rpx;
			border-bottom: 1rpx solid #f5f5f5;
			display: flex;
			position: sticky;
			top: 0;
			/* 吸顶位置 */
			z-index: 100;
			/* 确保在内容上方 */
			background-color: #fff;
			/* 背景色避免穿透 */
			justify-content: center;

			.title {
				font-size: 30rpx;
				font-weight: bold;
				color: #333;
				justify-content: center;

			}
		}

		.order-list {
			height: calc(80vh - 100rpx);
			padding-top: 20rpx;

			.order-item {
				display: flex;
				flex-direction: column;
				padding: 20rpx;
				margin-bottom: 20rpx;
				background: #fff;
				border-radius: 12rpx;
				box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);

				.goods-title {
					font-size: 30rpx;
					color: #333;
					margin-bottom: 10rpx;
					// @include u-line-2;
				}

				.goods-spec {
					font-size: 24rpx;
					color: #6f6666;
					margin-bottom: 20rpx;
					display: flex;

					.text {
						margin-left: 8rpx;
					}
				}

				.order-info {
					flex: 1;
					display: flex;

					.order-content {
						flex: 1;
						margin-left: 20rpx;

						.titleBox {
							margin-bottom: 20rpx;

							.title {
								font-size: 30rpx;
								font-weight: 700;
								margin-bottom: 8rpx;
								display: flex;
								justify-content: space-between;
								align-items: center;

							}

							.good_title {
								font-size: 24rpx;
								color: #6f6666;
								display: flex;
								justify-content: space-between;
								align-items: center;

							}
						}

					}



				}

				.buttonBox {
					display: flex;
					flex-direction: row-reverse;

					.u-size-mini {
						margin: 0;
					}
				}

			}
		}
	}
</style>