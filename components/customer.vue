<template>
	<!-- 订单弹窗组件 -->
	<u-popup v-model="showPopup" mode="bottom" :closeable="true" :round="20" :safe-area-inset-bottom="true"
		@close="handleClose">
		<view class="order-popup-container">
			<!-- 弹窗标题 -->
			<view class="popup-header">
				<text class="title">转接客服</text>
			</view>


			<!-- 订单列表 -->
			<scroll-view scroll-y class="order-list">
				<!-- 空状态 -->
				<u-empty v-if="kfList.length === 0" mode="list"
					icon="https://cdn.uviewui.com/uview/empty/list.png"></u-empty>

				<!-- 订单项 -->
				<view v-for="(item, index) in kfList" :key="index" class="order-item" >




					<view class="order-info">
						<u-image :src="item.headimgurl" width="100rpx" height="100rpx" radius="8"></u-image>

						<view class="order-content">
							<view class="titleBox">
					
								<view class="good_title">
									<view >
										{{item.name}}
									</view>
						
								</view>
							</view>
							<view class="buttonBox">

								<u-button size="mini" shape="circle"
									:custom-style="{background: '#FF4400',color: '#fff'}" @click="selectOrder(item)">转接</u-button>
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
		jkid: {
		  default: ''
		},
		kfListProp: {
		  type: Array,
		  default: () => []
		},
	  },
	  data() {
		return {
		  showPopup: this.visible,
		  kfList: this.kfListProp // 初始化订单数据
		};
	  },
	  watch: {
		visible(newVal) {
		  this.showPopup = newVal;
		  if (newVal) {
			this.kfList = this.kfListProp; // 当弹窗显示时，更新 kfList
		  }
		},
		kfListProp(newVal) {
		  this.kfList = newVal;
		  console.log(this.kfList);
		}
	  },
	  methods: {
		// 选择订单
		selectOrder(item) {
		  this.$emit('select', item);
		  this.handleClose();
		},
		// 关闭弹窗
		handleClose() {
		  this.showPopup = false;
		  this.$emit('closeBox', false);
		  this.kfList = [];
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
								color: #333;
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