<!-- filepath: /d:/仿微信wechat/components/QuickReply.vue -->
<template>
    <div class="quick-reply-container" :class="{'showQuick':visible}">
      <div class="quick-reply-content">
        <div class="quick-reply-sidebar">
          <div
            class="quick-reply-item"
            v-for="(item, index) in navItems"
            :key="index"
            :class="{ selected: selectedNavIndex === index }"
            @click="selectNavItem(index)"
          >
            {{ item }}
          </div>
        </div>
        <div class="quick-reply-main">
          <div
            class="quick-reply-content-item"
            v-for="(content, index) in contentItems[selectedNavIndex]"
            :key="index"
            :class="{ selected: selectedContentIndex === index }"
            @click="selectContentItem(index)"
          >
            <p>{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
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
    },
    data() {
      return {
        selectedNavIndex: 0,
        selectedContentIndex: null,
        navItems: ['处理质量问题', '商品与描述不符', '物流问题', '价格问题', '退货与换货', '推荐与推广', '客户关怀', '提升客户体验'],
        contentItems: [
          ['亲爱的顾客，非常抱歉给您带来不便。请拍摄一张照片给我，以便我们进行登记和处理。我们会尽快为您解决这个问题，并补偿您的损失。感谢您的理解和配合。'],
          ['商品与描述不符的处理方案','亲爱的顾客，非常抱歉给您带来不便。请拍摄一张照片给我，以便我们进行登记和处理。我们会尽快为您解决这个问题，并补偿您的损失。感谢您的理解和配合。','亲爱的顾客，非常抱歉给您带来不便。请拍摄一张照片给我，以便我们进行登记和处理。我们会尽快为您解决这个问题，并补偿您的损失。感谢您的理解和配合。','亲爱的顾客，非常抱歉给您带来不便。请拍摄一张照片给我，以便我们进行登记和处理。我们会尽快为您解决这个问题，并补偿您的损失。感谢您的理解和配合。'],
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
            this.selectedContentIndex = null;
        } 
      },
    },
    methods: {
      selectNavItem(index) {
        this.selectedNavIndex = index;
        this.selectedContentIndex = null; // 重置选中的内容项
      },
      selectContentItem(index) {
        this.selectedContentIndex = index;
      },
      close() {
        this.selectedNavIndex = 0;
        this.selectedContentIndex = null;
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .quick-reply-container {
    display: none;
    transition: all 0.2s ease-in-out;
    height: 0;
  }
  
  .showQuick {
    display: block;
    height: 500rpx;
    width: 100%;
  }
  
  .quick-reply-content {
    display: flex;
    height: 100%;
  }
  
  .quick-reply-sidebar {
    width: 30%;
    background: #efefef;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; /* 使滚动更平滑 */
    scrollbar-width: none; /* 隐藏 Firefox 的滚动条 */
  }
  
  .quick-reply-sidebar::-webkit-scrollbar {
    display: none; /* 隐藏 Chrome、Safari 和 Edge 的滚动条 */
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
    -webkit-overflow-scrolling: touch; /* 使滚动更平滑 */
    scrollbar-width: none; /* 隐藏 Firefox 的滚动条 */
  }
  .quick-reply-main::-webkit-scrollbar {
    display: none; /* 隐藏 Chrome、Safari 和 Edge 的滚动条 */
  }
  .quick-reply-content-item {
    padding:  20rpx;
    cursor: pointer;
    border: 1rpx solid transparent;
    border-bottom: 1rpx solid #e7e2e2; /* 分割线 */
    line-height: 40rpx;
  }
  
  .quick-reply-content-item.selected {
    background: #ffeedd;
    color: #000;
    border: 1rpx solid #ff8c19;
    border-bottom: 1rpx solid #ff8c19; /* 选中时的分割线颜色 */
  }
  </style>