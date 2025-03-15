<template>
    <view class="content">
        <view class="content-box" @touchstart="touchstart" id="content-box"
            :class="{'emoji-active':showFunBtn, 'emoji-active': emogiBox, 'showQuickReply-active': showQuickReply}">
            <!-- 背景图- 定位方式 -->
            <!-- 	<image class="content-box-bg" :src="_user_info.chatBgImg" :style="{ height: imgHeight }"></image> -->
            <view class="serviceReminder">
                <u-avatar :src="infoData.headimgurl" size="80"></u-avatar>
                <view class="minderText">
                    {{infoData.title}},前来服务~
                </view>
            </view>
            <scroll-view class="msg-list" scroll-y="true" :scroll-with-animation="scrollAnimation"
                :scroll-top="scrollTop" :scroll-into-view="scrollToView" @scrolltoupper="loadHistory"
                ref="scrollContainer" upper-threshold="50" @click="scrollBool">
                <!-- 加载历史数据waitingUI -->
                <view class="loading" v-if="isHistoryLoading">
                    <view class="spinner">
                        <view class="rect1"></view>
                        <view class="rect2"></view>
                        <view class="rect3"></view>
                        <view class="rect4"></view>
                        <view class="rect5"></view>
                    </view>
                </view>
                <view class="message" v-for="(item, index) in messageList" :key="index"
                    :id="`msg-${item.hasBeenSentId}`">

                    <view class="message-item " :class="item.is_me ? 'right' : 'left'">

                        <!-- contentType = 1 文本 -->
                        <view class="content" v-if="item.content_type == 1">{{ item.content }}</view>
                        <!-- contentType = 2 图片 -->
                        <view class="content contentType3" v-if="item.content_type == 2" @tap="viewImg([item.path])">
                            <image :src="item.path" class="img" mode="widthFix"></image>
                        </view>
                        <!-- contentType = 3 视频 -->
                        <view class="contentVideo " v-if="item.content_type == 3">
                            <video :src="item.path"></video>

                        </view>
                        <!-- contentType = 4 商品卡片 -->
                        <view class="contentGoods " v-if="item.content_type == 4">
                            <view class="goodsTop">
                                <view class="top_img">
                                    <u-image :src="item.sender_id != undefined?item.content.thumb_url:item.thumb_url"
                                        width="130rpx" height="120rpx"></u-image>
                                </view>
                                <view class="topText">
                                    <view class="text">
                                        {{item.sender_id != undefined?item.content.title:item.title}}
                                    </view>
                                    <view class="price">

                                        ￥{{item.sender_id != undefined?item.content.price:item.price}}
                                    </view>

                                </view>
                            </view>
                            <view class="goodsFooter">
                                <u-button size="mini" shape="circle"
                                    :custom-style="{background: '#FF4400',color: '#fff'}">去购买</u-button>

                            </view>
                        </view>
                        <!-- contentType = 5 订单卡片 -->
                        <view class="contentOrder " v-if="item.content_type == 5">
                            <view class="title">
                                我要咨询这笔订单
                            </view>
                            <view class="goodsTop">
                                <view class="top_img">
                                    <u-image
                                        :src="item.sender_id != undefined?item.content.goods.thumb_url:item.thumb_url"
                                        width="130rpx" height="120rpx"></u-image>
                                </view>
                                <view class="topText">
                                    <view class="text">
                                        <view class="shopText">
                                            {{item.sender_id != undefined?item.content.shop.title:item.shop_title}}
                                        </view>
                                        <view class="title">
                                            {{item.sender_id != undefined?item.content.goods.title:item.title}}
                                        </view>
                                    </view>
                                    <view class="price">
                                        <view class="num1">
                                            ￥{{item.sender_id != undefined?item.content.goods.price:item.price}}
                                        </view>
                                        <view class="num">
                                            共{{item.sender_id != undefined?item.content.goods.num:item.num}}件商品
                                        </view>
                                    </view>

                                </view>
                            </view>

                            <view class="orderNum">
                                <view class="bh">
                                    订单编号:{{item.sender_id != undefined?item.content.order_number:item.order_number}}
                                </view>
                                <view class="bh">
                                    订单时间:{{item.sender_id != undefined?item.content.order_time:item.order_time}}
                                </view>


                            </view>
                            <view class="goodsFooter">
                                <u-button size="mini" shape="circle"
                                    :custom-style="{background: '#2b85e4',color: '#fff'}">查看订单</u-button>

                            </view>
                        </view>



                        <!-- contentType = 2 语音 -->
                        <!-- {{item.hasBeenSentId != undefined?item.content.title:item.title}}-->
                        <!-- 					<view class="content contentType2" :class="[{ 'content-type-right': item.is_me }]"
						v-if="item.content_type == 3" @tap="handleAudio(item)" hover-class="contentType2-hover-class"
						:style="{width:`${130+(item.contentDuration*2)}rpx`}">
						<view class="voice_icon" :class="[
								{ voice_icon_right: item.is_me },
								{ voice_icon_left: !item.is_me },
								{ voice_icon_right_an: item.anmitionPlay && item.is_me },
								{ voice_icon_left_an: item.anmitionPlay && !item.is_me }
							]"></view>
						<view class="">{{ item.contentDuration }}''</view>
					</view> -->


                    </view>
                </view>
            </scroll-view>
            <view class="kjBox">
                <view class="quick-reply" v-for="(item, index) in kjList" :key="index"
                    @click="handleQuickReplyClick(item,index)"
                    :class="{ 'selected': selectedQuickReplyIndex === index }">
                    {{item.name}}

                </view>
            </view>
        </view>

        <!-- 底部聊天输入框 -->
        <view class="input-box" :class="{ 'input-box-mpInputMargin': mpInputMargin }">
            <view class="input-box-flex">
                <!-- #ifndef H5 -->
                <image v-if="chatType === 'voice'" class="icon_img" :src="require('@/static/voice.png')"
                    @click="switchChatType('keyboard')"></image>
                <image v-if="chatType === 'keyboard'" class="icon_img" :src="require('@/static/keyboard.png')"
                    @click="switchChatType('voice')"></image>
                <!-- #endif -->
                <view class="input-box-flex-grow">
                    <!-- <input v-if="chatType === 'voice'" type="text" class="content" id="input" v-model="formData.content"
                        :hold-keyboard="true" :confirm-type="'send'" :confirm-hold="true"
                        placeholder-style="color:#DDDDDD;" :cursor-spacing="10" @input="handleInput"
                        @confirm="sendMsg(null)" /> -->
                        <u-input v-model="value" type="textarea" border="true" height="100" auto-height="true" />

                    <view class="voice_title" v-if="chatType === 'keyboard'"
                        :style="{ background: recording ? '#c7c6c6' : '#FFFFFF' }" @touchstart.stop.prevent="startVoice"
                        @touchmove.stop.prevent="moveVoice" @touchend.stop="endVoice" @touchcancel.stop="cancelVoice">
                        {{ voiceTitle }}
                    </view>
                </view>
                <!-- 表情按钮 -->
                <image class="emoji icon_btn_add" :src="require('@/static/face.png')" @tap="emogiFun"></image>
                <!-- 功能性按钮 -->
                <image class=" icon_btn_add" :src="require('@/static/add.png')" @tap="switchFun"></image>

                <!-- #ifdef H5 -->
                <button class="btn" type="primary" size="mini" @touchend.prevent="sendMsg(null)">发送</button>
                <!-- #endif -->
            </view>

            <view class="fun-box" :class="{'show-fun-box':showFunBtn}">
                <u-grid :col="4" hover-class="contentType2-hover-class" :border="false" @click="clickGrid">
                    <u-grid-item v-for="(item, index) in funList" :index="index" :key="index" bg-color="#eaeaea">
                        <u-icon :name="item.icon" :size="52"></u-icon>
                        <view class="grid-text">{{ item.title }}</view>
                    </u-grid-item>
                </u-grid>
            </view>
            <!-- 表情选择 -->
            <view class="fun-box" :class="{'show-fun-box':emogiBox}">
                <swiper :current="swiperIndex" style="height: 100%;" @change="swiperChange" :indicator-dots="true">
                    <swiper-item v-for="(items, index) in emojData" :key="index">
                        <view class="emoj-container">
                            <view class="emoj-row">
                                <view class="emoj-parent" v-for="(item, i) in items" :key="i" hover-class="checkActive"
                                    hover-stay-time="100" @click="tuchEmoj(item)">
                                    <text class="emoj-conn">{{ item }}</text>
                                </view>
                            </view>
                        </view>
                    </swiper-item>

                </swiper>
                <view class="buttonBox" v-if="$u.trim(this.formData.content)">
                    <u-button size='mini' class="firstBut" :custom-style="{background: '#fff'}" @click="del">
                        <u-icon name="backspace" size="30" color='#000'></u-icon>
                    </u-button>
                    <u-button size='mini' type="primary" hairline="false" @click="sendMsg">发送</u-button>
                </view>
            </view>
            <!-- 快捷用语入口 -->
            <QuickReply :visible="showQuickReply" :item="selectedQuickReplyItem" :commonList='commonList'
                @dataContent="dataContent" />
        </view>

        <AutoComplete :visible="showAutoComplete" :query="formData.content" @select="handleSelectSuggestion"
            @close="handleCloseAutoComplete" :comPleteLikst="comPleteLikst" />

        <!-- 订单商品弹出 -->
        <order-popup :visible="showOrderPopup" @select="handleSelectOrder" :jkid='jkId' @closeBox='closeBox'
            :title='popTile' />
        <!-- 客服 -->
        <customer :visible="showcustomer" @select="handleSelect" @closeBox='closeKf'></customer>
        <!-- //语音动画 -->
        <view class="voice_an" v-if="recording">
            <view class="voice_an_icon">
                <view id="one" class="wave"></view>
                <view id="two" class="wave"></view>
                <view id="three" class="wave"></view>
                <view id="four" class="wave"></view>
                <view id="five" class="wave"></view>
                <view id="six" class="wave"></view>
                <view id="seven" class="wave"></view>
            </view>
            <view class="text">{{voiceIconText}}</view>
        </view>
    </view>

</template>

<script>
    import {
        LOGIN_URL
    } from '../../env';
    import WebSocketUtil from '@/socket.js'
    import OrderPopup from '@/components/popup.vue'
    import customer from '@/components/customer.vue'
    import QuickReply from '@/components/QuickReply.vue';
    import AutoComplete from '@/components/AutoComplete.vue';

    export default {
        data() {
            return {
                showAutoComplete: false,
                showQuickReply: false,
                selectedQuickReplyItem: null,
                roomType: '',
                info: {},
                kjList: [
                ],
                isHistoryLoading: false,
                scrollAnimation: false,
                scrollTop: 0,
                scrollToView: '',
                windowHeight: 0, // 动态计算高度
                emojData: [
                    // 分类1：笑脸与开心表情（33个）
                    [
                        '😀', '😃', '😄', '😁', '😆', '😊', '😇', '🙂', '😋', '😎',
                        '🥳', '🤩', '🤗', '😺', '😸', '😹', '😻', '😼', '😽', '🙌',
                        '👏', '👍', '🎉', '✨', '🌟', '💫', '❤️', '💯', '✅', '🌈',
                        '🚀', '😌',
                    ],

                    // 分类2：爱心与浪漫（33个）
                    [
                        '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
                        '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '💌',
                        '😍', '🥰', '😘', '😗', '😙', '😚', '😻', '💋', '️👨', '💏',
                        '👦', '💐',
                    ],

                    // 分类3：搞怪与顽皮（33个）
                    [
                        '😜', '😝', '😛', '🤪', '😏', '😒', '😔', '😫', '😩', '😤',
                        '😠', '😡', '🤬', '😈', '👿', '💀', '👻', '👽', '🤖', '🎃',
                        '😺', '😸', '😹', '👀', '👅', '👄', '🦷', '👂', '👃', '🤡',
                        '👺', '💩',
                    ],

                    // 分类4：动物与自然（33个）
                    [
                        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
                        '🦁', '🐮', '🐷', '🐸', '🐵', '🦄', '🐴', '🐦', '🐧', '🐔',
                        '🐙', '🦑', '🐠', '🐳', '🌲', '🌳', '🌴', '🌵', '🌻', '🌸',
                        '🦜', '🦢',
                    ],

                    // 分类5：动作与物品（33个）
                    [
                        '✌️', '🤞', '🤟', '🤘', '🤙', '👌', '👈', '👉', '👆', '👇',
                        '🖐️', '✋', '👊', '🤛', '🤜', '🤚', '👋', '🖖', '💪', '🎈',
                        '🎁', '🎂', '📱', '💻', '⌚', '📷', '🎮', '💰', '🔑', '🚗',
                        '🛒', '🎒',
                    ]
                ],
                swiperIndex: 0, // 初始 swiper 索引
                selectedEmoji: null, // 用于保存用户选择的表情
                msgImgList: [],
                historyList: [],
                fromUserInfo: {},
                formData: {
                    content: '',
                    limit: 20,
                    index: 1
                },
                showOrderPopup: false,
                showcustomer: false,
                ws: null,
                hosId: '',
                loading: true, //标识是否正在获取数据
                hosType: '',
                status: 'disconnected',
                messageList: [
                ],
                popTile: '',
                jkId: '',
                infoLeft: {},
                loading: true, //标识是否正在获取数据
                imgHeight: '1000px',
                mpInputMargin: false, //适配微信小程序 底部输入框高度被顶起的问题
                chatType: "voice", // 图标类型 'voice'语音 'keyboard'键盘
                voiceTitle: '按住 说话',
                commonList: [],
                throttleTimeout: null,
                Recorder: uni.getRecorderManager(),
                Audio: uni.createInnerAudioContext(),
                recording: false, //标识是否正在录音
                isStopVoice: false, //加锁 防止点击过快引起的当录音正在准备(还没有开始录音)的时候,却调用了stop方法但并不能阻止录音的问题
                voiceInterval: null,
                voiceTime: 0, //总共录音时长
                canSend: true, //是否可以发送
                PointY: 0, //坐标位置
                voiceIconText: "正在录音...",
                showFunBtn: false, //是否展示功能型按钮
                emogiBox: false, //是否展示表情选择
                AudioExam: null, //正在播放音频的实例
                selectedQuickReplyIndex: null,
                comPleteLikst: [],
                funList: [{
                    icon: "photo-fill",
                    title: "照片",
                    uploadType: ["album"]
                },
                {
                    icon: "camera-fill",
                    title: "拍摄",
                    uploadType: ["camera"]
                },
                {
                    icon: "order",
                    title: "订单",

                },
                {
                    icon: "bag-fill",
                    title: "商品",
                },
                {
                    icon: "kefu-ermai",
                    title: "客服"
                }
                ],
                infoData: {}, // 初始化 infoData
            };
        },
        components: {
            OrderPopup,
            customer,
            QuickReply,
            AutoComplete
        },
        watch: {
            // 取消选中
            showQuickReply(val) {
                if (!val) {
                    this.selectedQuickReplyIndex = null;
                }
            },
        },
        methods: {
            handleInput(e) {
                if (this.throttleTimeout) {
                    clearTimeout(this.throttleTimeout);
                }
                this.throttleTimeout = setTimeout(() => {

                    if (!(e.target.value.trim().length === 0)) {
                        this.autoComplete(this.jkId, e.target.value);

                    }



                    // this.showAutoComplete = !!this.formData.content;
                }, 300); // 300 毫秒的节流时间


            },
            //模糊搜索
            autoComplete(val, content) {
                return new Promise((resolve, reject) => {
                    this.$api('autoComplete', {
                        client_id: val,
                        keywords: content
                    }).then(res => {
                        if (res.status == 200) {
                            console.log(res.data);
                            if (res.data) {
                                this.showAutoComplete = true
                                this.comPleteLikst = res.data.list
                            } else {
                                this.showAutoComplete = false
                            }


                        }
                        resolve(true);
                    }).catch((e) => {
                        resolve(false);
                        // console.log(e);
                    });
                })
            },
            handleSelectSuggestion(item) {
                this.formData.content = item;
                this.showAutoComplete = false;
            },
            handleCloseAutoComplete() {
                this.showAutoComplete = false;
            },
            //获取传递的文字
            dataContent(data) {
                console.log(data);
                this.formData.content = data

            },
            //获取分类
            getList(val) {
                console.log(val);

                return new Promise((resolve, reject) => {
                    this.$api('getCateList', {
                        client_id: val
                    }).then(res => {
                        if (res.status == 200) {
                            this.kjList = res.data.common_list
                            this.commonList = res.data.cate_list
                            console.log(this.commonList);

                        }
                        resolve(true);
                    }).catch((e) => {
                        resolve(false);
                        // console.log(e);
                    });
                })
            },
            scrollBool() {
                this.showQuickReply = false;

            },
            handleQuickReplyClick(item, index) {
                this.emogiBox = false;
                this.showFunBtn = false;
                this.scrollToView = 'msg-0';
                if (index === 0) {
                    if (this.selectedQuickReplyIndex === index) {
                        this.selectedQuickReplyIndex = null;

                        this.showQuickReply = false;
                    } else {
                        this.selectedQuickReplyIndex = index;
                        this.selectedQuickReplyItem = item;
                        this.showQuickReply = true;
                    }
                } else {

                    this.formData.content = item.content;

                    this.selectedQuickReplyIndex = null; // 点击其他项时不高亮
                }
            },
            del() {

                let arr = Array.from(this.formData.content); // 按字符拆分为数组
                arr = arr.slice(0, -1); // 删除最后一个字符
                this.formData.content = arr.join('');
                console.log(this.formData.content);
            },
            //触发滑动到顶部(加载历史信息记录)
            loadHistory(e) {
                console.log(e)
                if (this.isHistoryLoading) {
                    return;
                }
                this.isHistoryLoading = true; //参数作为进入请求标识，防止重复请求
                this.scrollAnimation = false; //关闭滑动动画
                // let Viewid = this.messageList[0].msg.id;//记住第一个信息ID
                //本地模拟请求历史记录效果
                setTimeout(() => {
                    // 消息列表

                    console.log(this.historyList);
                    // 获取消息中的图片,并处理显示尺寸
                    for (let i = 0; i < this.historyList.length; i++) {

                        this.historyList[i].hasBeenSentId = Math.floor(Math.random() * 1000 + 1);
                        this.messageList.unshift(this.historyList[i]);
                    }
                    //这段代码很重要，不然每次加载历史数据都会跳到顶部
                    this.$nextTick(function () {
                        this.scrollToView = 'msg-19'
                        this.$nextTick(function () {
                            this.scrollAnimation = true; //恢复滚动动画
                        });

                    });
                    this.isHistoryLoading = false;

                }, 1000)
            },

            //处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
            setPicSize(content) {
                // 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
                let maxW = uni.upx2px(350); //350是定义消息图片最大宽度
                let maxH = uni.upx2px(350); //350是定义消息图片最大高度
                if (content.w > maxW || content.h > maxH) {
                    let scale = content.w / content.h;
                    content.w = scale > 1 ? maxW : maxH * scale;
                    content.h = scale > 1 ? maxW / scale : maxH;
                }
                return content;
            },
            //选中订单
            handleSelectOrder(item) {

                this.sendMsg(item)

                // 跳转到订单详情页或其他操作
            },
            //转接客服
            handleSelect(item) {

            },
            //关闭
            closeBox(data) {

                this.showOrderPopup = data
            },
            closeKf(data) {

                this.showcustomer = data
            },
            init(data) {
                // 初始化 WebSocket
                this.ws = new WebSocketUtil('wss://192.168.0.119:8088/ws/', {
                    maxReconnect: 5, // 最大重连次数
                    reconnectDelay: 2000, // 重连间隔
                    heartbeatInterval: 100000 // 心跳间隔
                });

                // 监听事件
                this.ws.on('open', () => {

                    this.status = 'connected'
                });
                this.ws.send(data)
                this.ws.startHeartbeat(data)
                this.ws.on('close', () => this.status = 'disconnected');
                this.ws.on('error', (err) => console.error('发生错误:', err));
                this.ws.on('message', (res) => {
                    console.log(res);
                    if (res.type == 'onConnect') {

                        this.jkId = res.data.client_id
                        this.gethistoryList(this.jkId)

                    }

                    if (res.type == 'login') {
                        this.messageList = res.data.list
                        this.info = res.data.sender_info

                        this.messageList.map(
                            (i, index) => {
                                i.path = i.content
                                i.hasBeenSentId = this.messageList.length - 1 - index
                                if (i.is_me) {
                                    i.is_me = true
                                } else {
                                    i.is_me = false
                                }

                            }


                        )

                    }

                    this.$nextTick(function () {
                        //进入页面滚动到底部
                        this.scrollTop = 99999999999
                        this.$nextTick(function () {
                            this.scrollAnimation = true;

                        });

                    });

                });
            },

            // 加载历史消息
            gethistoryList(page) {

                return new Promise((resolve, reject) => {
                    this.$api('history', {
                        client_id: page
                    }).then(res => {

                        if (res.status == 200) {
                            this.historyList = res.data.list
                        }
                        resolve(true);
                    }).catch((e) => {

                        resolve(false);
                        // console.log(e);
                    });
                })

            },






            //切换语音或者键盘方式
            switchChatType(type) {

                this.chatType = type;
                this.showFunBtn = false;
            },
            //打开表情选项
            emogiFun() {
                this.chatType = 'voice'
                this.emogiBox = !this.emogiBox;
                this.showFunBtn = false;
                this.showQuickReply = false;
                this.scrollToView = 'msg-0';
                uni.hideKeyboard();
                // this.scrollToView = 'msg-0';


            },
            //切换功能性按钮
            switchFun() {
                this.chatType = 'voice'
                this.showFunBtn = !this.showFunBtn;
                this.emogiBox = false
                this.showQuickReply = false;
                uni.hideKeyboard()

            },
            tuchEmoj(item) {
                this.formData.content += item

            },
            swiperChange(e) {
                this.swiperIndex = e.detail.current;
            },


            //发送消息
            sendMsg(data) {
                const sedData = {
                    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk",
                    type: 'dialog',
                    shop_id: null,
                    user_id: null,
                    content_type: 1,
                    content: this.formData.content,
                    room_type: this.hosType

                }
                if (this.hosType === 1 || this.hosType === 2 || this.hosType === 3) {
                    sedData.shop_id = this.hosId

                } else {
                    sedData.user_id = this.hosId
                }


                if (data) {
                    if (data.contentType == 3) {
                        //说明是发送视频
                        sedData.path = data.path
                        sedData.content = data.content;
                        sedData.content_type = data.contentType;

                    } else if (data.contentType == 2) {
                        //发送图片
                        sedData.path = data.path
                        sedData.content = data.content;
                        sedData.content_type = data.contentType;


                    } else if (data.contentType == 4) {
                        //商品
                        sedData.content = data.id
                        sedData.content_type = data.contentType;
                        sedData.thumb_url = data.thumb_url
                        sedData.title = data.title
                        sedData.price = data.price

                    } else if (data.contentType == 5) {
                        //订单
                        sedData.content = data.fatherId + ':' + data.id
                        sedData.content_type = data.contentType;
                        sedData.thumb_url = data.thumb_url
                        sedData.title = data.title
                        sedData.price = data.price
                        sedData.order_number = data.order_number
                        sedData.order_time = data.order_time
                        sedData.shop_title = data.shop_title
                        sedData.num = data.num


                    }
                } else if (!this.$u.trim(this.formData.content)) {
                    //验证输入框书否为空字符传
                    return;
                }

                this.ws.send(sedData)

                sedData.is_me = true,
                    sedData.headimgurl = this.info.headimgurl
                this.messageList.push(sedData);
                this.messageList.map(
                    (i, index) => {
                        i.hasBeenSentId = this.messageList.length - 1 - index
                    }

                )

                this.$nextTick(() => {

                    this.formData.content = '';
                    // #ifdef MP-WEIXIN

                    this.scrollToView = 'msg-0'
                    // #endif

                    // #ifndef MP-WEIXIN
                    this.scrollToView = 'msg-0'
                    // #endif

                    if (this.showFunBtn) {
                        this.showFunBtn = false;
                    }

                    // #ifdef MP-WEIXIN 
                    if (sedData.contentType == 1) {
                        this.mpInputMargin = true;
                    }
                    // #endif
                    //h5浏览器并没有很好的办法控制键盘一直处于唤起状态 而且会有样式性的问题
                    // #ifdef H5
                    uni.hideKeyboard();
                    // #endif
                });
            },
            //用户触摸屏幕的时候隐藏键盘
            touchstart() {
                uni.hideKeyboard();
                this.showFunBtn = false
                this.emogiBox = false

            },
            // userid 用户id
            linkToBusinessCard(userId) {
                // this.$u.route({
                // 	url: 'pages/businessCard/businessCard',
                // 	params: {
                // 		userId
                // 	}
                // });
            },
            //准备开始录音
            startVoice(e) {
                if (!this.Audio.paused) {
                    //如果音频正在播放 先暂停。
                    this.stopAudio(this.AudioExam)
                }
                this.recording = true;
                this.isStopVoice = false;
                this.canSend = true;
                this.voiceIconText = "正在录音..."
                this.PointY = e.touches[0].clientY;
                this.Recorder.start({
                    format: 'mp3'
                });
            },
            //录音已经开始
            beginVoice() {
                if (this.isStopVoice) {
                    this.Recorder.stop();
                    return;
                }
                this.voiceTitle = '松开 结束'
                this.voiceInterval = setInterval(() => {
                    this.voiceTime++;
                }, 1000)
            },
            //move 正在录音中
            moveVoice(e) {
                const PointY = e.touches[0].clientY
                const slideY = this.PointY - PointY;
                if (slideY > uni.upx2px(120)) {
                    this.canSend = false;
                    this.voiceIconText = '松开手指 取消发送 '
                } else if (slideY > uni.upx2px(60)) {
                    this.canSend = true;
                    this.voiceIconText = '手指上滑 取消发送 '
                } else {
                    this.voiceIconText = '正在录音... '
                }
            },
            //结束录音
            endVoice() {
                this.isStopVoice = true; //加锁 确保已经结束录音并不会录制
                this.Recorder.stop();
                this.voiceTitle = '按住 说话'
            },
            //录音被打断
            cancelVoice(e) {
                this.voiceTime = 0;
                this.voiceTitle = '按住 说话';
                this.canSend = false;
                this.Recorder.stop();
            },
            //处理录音文件
            handleRecorder({
                tempFilePath,
                duration
            }) {
                let contentDuration;
                // #ifdef MP-WEIXIN
                this.voiceTime = 0;
                if (duration < 600) {
                    this.voiceIconText = "说话时间过短";
                    setTimeout(() => {
                        this.recording = false;
                    }, 200)
                    return;
                }
                contentDuration = duration / 1000;
                // #endif

                // #ifdef APP-PLUS
                contentDuration = this.voiceTime + 1;
                this.voiceTime = 0;
                if (contentDuration <= 0) {
                    this.voiceIconText = "说话时间过短";
                    setTimeout(() => {
                        this.recording = false;
                    }, 200)
                    return;
                };
                // #endif

                this.recording = false;
                const params = {
                    contentType: 2,
                    content: tempFilePath,
                    contentDuration: Math.ceil(contentDuration)
                };
                this.canSend && this.sendMsg(params);
            },
            //控制播放还是暂停音频文件
            handleAudio(item) {
                this.AudioExam = item;
                this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
            },
            //播放音频
            playAudio(item) {
                this.Audio.src = item.content;
                this.Audio.hasBeenSentId = item.hasBeenSentId;
                this.Audio.play();
                item.anmitionPlay = true;
            },
            //停止音频
            stopAudio(item) {
                item.anmitionPlay = false;
                this.Audio.src = '';
                this.Audio.stop();
            },
            //关闭动画
            closeAnmition() {
                const hasBeenSentId = this.Audio.hasBeenSentId;
                const item = this.messageList.find(it => it.hasBeenSentId == hasBeenSentId);
                item.anmitionPlay = false;
            },
            //点击宫格时触发
            clickGrid(index) {
                if (index == 0) {
                    this.chooseImage(['album'])
                } else if (index == 1) {
                    this.chooseImage(['camera'])
                } else if (index == 2) {

                    this.showFunBtn = false;
                    this.popTile = '请选择需要咨询的订单'
                    this.showOrderPopup = true
                } else if (index == 3) {

                    this.showFunBtn = false;
                    this.showOrderPopup = true
                    this.popTile = '发送商品'
                } else if (index == 4) {
                    let parmas = {
                        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk",
                        type: "cs_list",
                        room_type: this.hosType
                    }
                    this.ws.send(parmas)
                    this.showFunBtn = false;
                    this.showcustomer = true
                }
            },
            //发送图片
            chooseImage(sourceType) {
                uni.chooseMedia({
                    count: 9,
                    mediaType: ['image', 'video'], // 允许图片和视频
                    sourceType: sourceType,
                    maxDuration: 15,
                    success: (res) => {
                        const files = res.tempFiles;

                        this.uploadFiles(files, res.type);
                    }
                });

            },
            // 选择图片后调用此方法
            uploadFiles(tempFilePath, type) {

                // 平台判断
                // #ifdef H5
                this.uploadImageInH5(tempFilePath);
                // #endif

                // #ifdef MP-WEIXIN || MP-ALIPAY
                this.uploadImageInMiniProgram(tempFilePath, type);
                // #endif
            },
            // H5 端处理
            async uploadImageInH5(tempFilePath) {
                try {
                    // 1. 将 Blob URL 转换为 File 对象
                    const response = await fetch(tempFilePath);
                    const blob = await response.blob();
                    const file = new File([blob], 'image.jpg', {
                        type: blob.type
                    });

                    // 2. 构造 FormData
                    const formData = new FormData();
                    formData.append('file', file); // 文件字段
                    formData.append('userId', '123'); // 其他参数

                    // 3. 发送请求（使用 uni.request 或原生 fetch）
                    const result = await this.sendFormDataRequest(formData);
                    console.log('上传成功:', result);
                } catch (err) {
                    console.error('H5端上传失败:', err);
                }
            },
            // 小程序端处理
            uploadImageInMiniProgram(tempFilePath, type) {

                const uploadTasks = tempFilePath.map(file => {

                    return new Promise((resolve, reject) => {
                        uni.uploadFile({
                            url: 'http://192.168.0.119:8080/upload/upload2Oss',
                            filePath: file.tempFilePath,
                            name: 'file', // 参数名需与后端一致
                            header: {
                                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk"

                            },
                            formData: {
                                client_id: this.jkId
                            },
                            success: (res) => {
                                if (res.statusCode === 200) {
                                    try {
                                        const data = JSON.parse(res.data);

                                        this.sendMsg({
                                            contentType: type == 'image' ? 2 : 3,
                                            content: data.data.list[0],
                                            path: file.tempFilePath
                                        })

                                    } catch (e) {
                                        reject(new Error('解析响应失败'));
                                    }
                                } else {
                                    reject(new Error(`上传失败，状态码：${res.statusCode}`));
                                }
                            },
                            fail: (err) => {
                                reject(err);
                            }
                        });
                    });
                });

                // 合并所有结果
                Promise.all(uploadTasks)
                    .then(results => {
                        const allList = results.flat(); // 合并成完整路径数组
                        console.log('上传成功，文件列表：', allList);



                    })
                    .catch(error => {
                        console.error('上传出错：', error);
                        uni.showToast({
                            title: '上传失败',
                            icon: 'none'
                        });
                    });

            },
            //查看大图
            viewImg(imgList) {
                uni.previewImage({
                    urls: imgList,
                    // #ifndef MP-WEIXIN
                    indicator: 'number'
                    // #endif
                });
            },
        },
        onPageScroll(e) {

            // this.messageList = [...this.historyList , ...this.messageList];
            // this.messageList.push({content:'222'})
        },


        onNavigationBarButtonTap({
            index
        }) {
            if (index == 0) {
                //用户详情 设置
            } else if (index == 1) {

                //返回按钮
                this.$u.route({
                    type: 'switchTab',
                    url: 'pages/home/home'
                });
            }
        },
        //返回按钮事件
        onBackPress(e) {
            //以下内容对h5不生效
            //--所以如果用浏览器自带的返回按钮进行返回的时候页面不会重定向 正在寻找合适的解决方案
            this.$u.route({
                type: 'switchTab',
                url: 'pages/home/home'
            });
            return true;
        },
        onUnload() {
            const params = {
                room_type: this.roomType,
                type: "logout",
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEwNzQ4ODUsImV4cCI6MTc0MzY2Njg4NSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJ1c2VyIiwidXNlcl9pZCI6NDd9fQ.Ave2qlEte478fxGKlAD_Zbicmx-o27HG3LEnhHVoRLk"
            }
            this.ws.send(params)

            if (this.ws) {
                this.ws.close()
            }
        },
        onLoad(info) {


            this.$nextTick(function () {
                //进入页面滚动到底部
                this.scrollTop = 99999999999
                this.$nextTick(function () {
                    this.scrollAnimation = true;

                });

            });


            const infoData = JSON.parse(info.data)
            uni.setNavigationBarTitle({
                title: infoData.title
            });
            this.roomType = infoData.room_type
            const params = {

                user_id: null,
                shop_id: null,
                room_type: infoData.room_type,
                type: "login",
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEzMzQ1MTUsImV4cCI6MTc0MzkyNjUxNSwiZGF0YSI6eyJ1c2VyX3R5cGUiOiJhZG1pbiIsImFkbWluX3VpZCI6MX19.fZwFbBkcbc4yv_FiGM6kSZ97L9eBNzFt7cAZZ-NR7H8"
            }
            this.hosType = infoData.room_type
            if (infoData.room_type === 1 || infoData.room_type === 2 || infoData.room_type === 3) {
                params.shop_id = infoData.shop_id
                this.hosId = infoData.shop_id
            } else {
                params.user_id = infoData.user_id
                this.hosId = infoData.user_id
            }

            this.infoData = infoData; // 赋值 infoData

            this.init(params)
            this.$nextTick(() => {
                this.getList(this.jkId)
            })



            //录音开始事件
            this.Recorder.onStart(e => {

                this.beginVoice();
            });
            //录音结束事件
            this.Recorder.onStop(res => {
                clearInterval(this.voiceInterval);
                this.handleRecorder(res);
            });

            //音频停止事件
            this.Audio.onStop(e => {
                this.closeAnmition();
            });

            //音频播放结束事件
            this.Audio.onEnded(e => {
                this.closeAnmition();
            });
        },
        onReady() {
            //自定义返回按钮 因为原生的返回按钮不可阻止默认事件
            // #ifdef H5
            const icon = document.getElementsByClassName('uni-page-head-btn')[0];
            icon.style.display = 'none';
            // #endif

            uni.setNavigationBarTitle({
                title: this.fromUserInfo.fromUserName
            });
            // this.joinData();
            uni.getSystemInfo({
                success: res => {
                    this.imgHeight = res.windowHeight + 'px';
                }
            });

            uni.onKeyboardHeightChange(res => {
                if (res.height == 0) {
                    // #ifdef MP-WEIXIN
                    this.mpInputMargin = false;
                    // #endif
                } else {
                    this.showFunBtn = false;
                }
            });
        }
    };
</script>

<style lang="scss" scoped>
    @import './index.scss'
</style>