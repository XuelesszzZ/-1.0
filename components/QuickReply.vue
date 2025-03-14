<!-- filepath: /d:/仿微信wechat/components/QuickReply.vue -->
<template>
    <view :class="{'showQuick':visible}" class="allBox">
      <view class="kjBox">
        <view class="quick-reply" v-for="(item, index) in kjList" :key="index"
          @click="handleQuickReplyClick(item,index)" :class="{ 'selected': selectedQuickReplyIndex === index }">
          {{item.name}}
        </view>
      </view>
      <div class="quick-reply-container">
        <div class="quick-reply-content">
          <div class="quick-reply-sidebar">
            <div class="quick-reply-item" v-for="(item, index) in navItems" :key="index"
              :class="{ selected: selectedNavIndex === index }" @click="selectNavItem(index)">
              {{ item }}
            </div>
          </div>
          <div class="quick-reply-main">
            <div class="quick-reply-content-item" v-for="(content, index) in contentItems[selectedNavIndex]"
              :key="index" :class="{ selected: selectedContentIndex === index }" @click="selectContentItem(index)">
              <p>{{ content }}</p>
            </div>
          </div>
        </div>
      </div>
    </view>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      item: {
        type: String,
        default: '',
      },
      client:{
        type: String,
        default: ''
      }
    },
    data() {
      return {
        kjList: ['大大大的', 'DAASDAD', '大大大的', 'DAASDAD', '大大大的', 'DAASDAD'],
        selectedNavIndex: 0,
        selectedQuickReplyIndex: 0, // 默认选中第一个
        selectedContentIndex: null, // 默认选中第一个
        navItems: ['处理质量问题', '商品与描述不符', '物流问题', '价格问题', '退货与换货', '推荐与推广', '客户关怀', '提升客户体验'],
        contentItems: [
          ['亲爱的顾客，非常抱歉给您带来不便。请拍摄一张照片给我，以便我们进行登记和处理。我们会尽快为您解决这个问题，并补偿您的损失。感谢您的理解和配合。'],
          ['商品与描述不符的处理方案', '亲爱的顾客，非常抱歉给您带来不便。请拍摄一张照片给我，以便我们进行登记和处理。我们会尽快为您解决这个问题，并补偿您的损失。感谢您的理解和配合。', '亲爱的顾客，非常抱歉给您带来不便。请拍摄一张照片给我，以便我们进行登记和处理。我们会尽快为您解决这个问题，并补偿您的损失。感谢您的理解和配合。', '亲爱的顾客，非常抱歉给您带来不便。请拍摄一张照片给我，以便我们进行登记和处理。我们会尽快为您解决这个问题，并补偿您的损失。感谢您的理解和配合。'],
          ['物流问题的处理方案...'],
          ['价格问题的处理方案...'],
          ['退货与换货的处理方案...'],
          ['推荐与推广的处理方案...'],
          ['客户关怀的处理方案...'],
          ['提升客户体验的处理方案...'],
        ],
      };
    },
    watch: {
      visible(val) {
        if (!val) {
          this.selectedNavIndex = 0;
          this.selectedContentIndex = null; // 重置为第一个
          this.selectedQuickReplyIndex = 0
        }
      },
      client(val){
        if(val){
            console.log(val);
            
          this.getList(val)
        }
      }
    },
    methods: {
        //获取分类
        getList(val){
			return new Promise((resolve, reject) => {
					this.$api('getCateList', {
						client_id: val
					}).then(res => {
                                res = {
  status: 200,
  message: "success",
  data: {
    list: [
      {
        id: 1,
        pid: 0,
        name: "售前",
        child_list: [
          {
            id: 9,
            pid: 1,
            name: "推销",
            child_list: []
          }
        ]
      },
      {
        id: 2,
        pid: 0,
        name: "售后",
        child_list: [
          {
            id: 4,
            pid: 2,
            name: "商品质量",
            child_list: []
          },
          {
            id: 5,
            pid: 2,
            name: "描述不符",
            child_list: []
          },
          {
            id: 6,
            pid: 2,
            name: "物流",
            child_list: []
          },
          {
            id: 7,
            pid: 2,
            name: "退换货",
            child_list: []
          },
          {
            id: 8,
            pid: 2,
            name: "回访",
            child_list: []
          }
        ]
      },
      {
        id: 3,
        pid: 0,
        name: "客户关怀",
        child_list: [
          {
            id: 10,
            pid: 3,
            name: "节日问候",
            child_list: []
          }
        ]
      }
    ]
  }
}
					 	if (res.status == 200) {
		              
                                this.kjList = res.data.list


						}
						resolve(true);
					}).catch((e) => {
						resolve(false);
						// console.log(e);
					});
				})
        },
      handleQuickReplyClick(item, index) {
        if (this.selectedQuickReplyIndex === index) {
          this.selectedQuickReplyIndex = null;
          this.showQuickReply = false;
        } else {
          this.selectedQuickReplyIndex = index;
          this.selectedQuickReplyItem = item;
          this.showQuickReply = true;
        }
      },
      selectNavItem(index) {
        this.selectedNavIndex = index;

      },
      selectContentItem(index) {
        this.selectedContentIndex = index;
      },

    },
  };
  </script>
  
  <style scoped>
  .kjBox {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10rpx;
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    /* 使滚动更平滑 */
    scrollbar-width: none;
    /* 隐藏 Firefox 的滚动条 */
  }
  
  .quick-reply {
    height: 100%;
    background-color: #fff;
    border-radius: 25rpx;
    /* 设置圆角为矩形圆角 */
    text-align: center;
    padding: 12rpx 20rpx;
    margin-right: 15rpx;
    font-size: 25rpx;
    white-space: nowrap;
    /* 禁止换行 */
    flex-shrink: 0;
    border: 1px solid #c9c9c9;
    /* 默认边框颜色透明 */
    /* 防止溢出 */
  }
  
  .quick-reply.selected {
    border: 1px solid #fa973c;
    /* 选中时的边框颜色 */
    color: #fa973c;
    /* 选中时的字体颜色 */
  }
  
  .kjBox::-webkit-scrollbar {
    display: none;
    /* 隐藏 Chrome、Safari 和 Edge 的滚动条 */
  }
  
  .allBox {
    display: none;
    transition: all 0.2s ease-in-out;
    height: 0;
    background-color: #fff;
    z-index: 10000;
  }
  
  .showQuick {
    display: block;
    height: 600rpx;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .quick-reply-content {
    display: flex;
    height: 100%;
  }
  
  .quick-reply-container {
    height: 85%;
  }
  
  .quick-reply-sidebar {
    width: 30%;
    background: #efefef;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    /* 使滚动更平滑 */
    scrollbar-width: none;
    /* 隐藏 Firefox 的滚动条 */
  }
  
  .quick-reply-sidebar::-webkit-scrollbar {
    display: none;
    /* 隐藏 Chrome、Safari 和 Edge 的滚动条 */
  }
  
  .quick-reply-item {
    padding: 20rpx;
    cursor: pointer;
    font-size: 25rpx;
  }
  
  .quick-reply-item.selected {
    background: #fff;
    color: #fa973c;
    border-left: 4rpx solid #fa973c;
  }
  
  .quick-reply-main {
    width: 70%;
    padding: 20rpx;
    overflow-y: auto;
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    /* 使滚动更平滑 */
    scrollbar-width: none;
    /* 隐藏 Firefox 的滚动条 */
  }
  
  .quick-reply-main::-webkit-scrollbar {
    display: none;
    /* 隐藏 Chrome、Safari 和 Edge 的滚动条 */
  }
  
  .quick-reply-content-item {
    padding: 20rpx;
    cursor: pointer;
    border: 1rpx solid transparent;
    border-bottom: 1rpx solid #e7e2e2;
    /* 分割线 */
    line-height: 40rpx;
  }
  
  .quick-reply-content-item.selected {
    background: #ffeedd;
    color: #000;
    border: 1rpx solid #ff8c19;
    border-bottom: 1rpx solid #ff8c19;
    /* 选中时的分割线颜色 */
  }
  </style>