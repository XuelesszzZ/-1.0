<!-- filepath: /d:/仿微信wechat/components/QuickReply.vue -->
<template>
    <view :class="{'showQuick':visible}" class="allBox">
        <view class="kjBox">
            <view class="quick-reply" v-for="(item, index) in commonList" :key="index"
                @click="handleQuickReplyClick(item,index)" :class="{ 'selected': selectedQuickReplyIndex === index }">
                {{item.name}}
            </view>
        </view>
        <div class="quick-reply-container">
            <div class="quick-reply-content">
                <div class="quick-reply-sidebar">
                    <div class="quick-reply-item" v-for="(item, index) in selectedQuickReplyItem.child_list"
                        :key="index" :class="{ selected: selectedNavIndex === index }" @click="selectNavItem(index)">
                        {{ item.name }}
                    </div>
                </div>
                <div class="quick-reply-main">
                    <div class="quick-reply-content-item" v-for="(content, index) in selectedNavItem.reply_list"
                        :key="index" :class="{ selected: selectedContentIndex === index }"
                        @click="selectContentItem(item,index)">
                        <p>{{ content.content }}</p>
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
            commonList: {
                type: Array,
                default: () => [],
            }
        },
        data() {
            return {
                selectedNavIndex: 0,
                selectedQuickReplyIndex: 0, // 默认选中第一个
                selectedContentIndex: null, // 默认选中第一个
                selectedQuickReplyItem: this.commonList[0] || {}, // 默认选中第一个
            };
        },
        watch: {
            visible(val) {
                if (!val) {
                    this.selectedNavIndex = 0;
                    this.selectedContentIndex = null; // 重置为第一个
                    this.selectedQuickReplyIndex = 0;
                    this.selectedQuickReplyItem = this.commonList[0] || {};
                }
            },
            commonList: {
                handler(val) {
                    this.selectedQuickReplyItem = val[0] || {};
                },
                deep: true,
                immediate: true
            }
        },
        computed: {
            selectedNavItem() {
                return this.selectedQuickReplyItem.child_list[this.selectedNavIndex] || {};
            }
        },
        methods: {
            handleQuickReplyClick(item, index) {

                if (this.selectedQuickReplyIndex === index) {
                    this.selectedQuickReplyIndex = null;
                    this.showQuickReply = false;

                } else {
                    this.selectedContentIndex = null
                    this.selectedNavIndex = 0
                    this.selectedQuickReplyIndex = index;
                    this.selectedQuickReplyItem = item;
                    this.showQuickReply = true;
                }
            },
            selectNavItem(index) {
                this.selectedNavIndex = index;
                this.selectedContentIndex = null; // 重置选中的内容项
            },
            selectContentItem(item, index) {
                this.selectedContentIndex = index;
                this.$emit('dataContent', item.content);
            },
            close() {
                this.selectedNavIndex = 0;
                this.selectedContentIndex = null; // 重置为第一个
                this.selectedQuickReplyIndex = 0;
                this.selectedQuickReplyItem = this.commonList[0] || {};
           
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