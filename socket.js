// utils/websocket.js

class WebSocketManager {
  constructor(url, options = {}) {
    // 配置参数
    this.url = url; // WebSocket 地址
    this.socketTask = null; // WebSocket 实例
    this.reconnectCount = 0; // 当前重连次数
    this.maxReconnect = options.maxReconnect || 5; // 最大重连次数
    this.reconnectDelay = options.reconnectDelay || 3000; // 重连间隔(毫秒)
    this.heartbeatInterval = options.heartbeatInterval || 30000; // 心跳间隔(毫秒)
    this.heartbeatTimer = null; // 心跳定时器
    this.messageQueue = []; // 消息队列
    this.isManualClose = false; // 是否主动关闭
    this.listeners = new Map(); // 事件监听器

    // 初始化连接
    this.connect();
  }

  // 创建 WebSocket 连接
  connect() {
    // 防止重复创建
    if (this.socketTask && this.socketTask.readyState === 1) return;

    // 创建连接
    this.socketTask = uni.connectSocket({
      url: this.url,
      header: { 'Content-Type': 'application/json' },
      success: () => console.log('[WebSocket] 连接建立中...'),
      fail: (err) => this.handleError('连接失败', err)
    });

    // 绑定事件
    this.socketTask.onOpen(() => this.handleOpen());
    this.socketTask.onMessage((res) => this.handleMessage(res.data));
    this.socketTask.onError((err) => this.handleError('通信错误', err));
    this.socketTask.onClose(() => this.handleClose());
  }

  // 连接成功回调
  handleOpen() {
    console.log('[WebSocket] 连接成功');
    this.reconnectCount = 0; // 重置重连次数
    // this.startHeartbeat(); // 启动心跳
    this.flushQueue(); // 发送队列消息
    this.emit('open'); // 触发 open 事件
  }

  // 收到消息回调
  handleMessage(data) {
    try {
      const parsedData = JSON.parse(data);
      this.emit('message', parsedData); // 触发消息事件
    } catch (err) {
      // console.error('[WebSocket] 消息解析失败:', data);
    }
  }

  // 错误处理
  handleError(type, err) {
    console.error(`[WebSocket] ${type}:`, err);
    this.emit('error', { type, error: err });
    if (!this.isManualClose) this.reconnect();
  }

  // 关闭连接回调
  handleClose() {
    console.log('[WebSocket] 连接关闭');
    this.stopHeartbeat(); // 停止心跳
    this.emit('close'); // 触发 close 事件
    if (!this.isManualClose) this.reconnect();
  }

  // 发送消息
  send(data) {
    if (this.socketTask?.readyState === 1) {
      this.socketTask.send({
        data: JSON.stringify(data),
        success: () => console.log('[WebSocket] 消息已发送:', data),
        fail: (err) => {
          console.error('[WebSocket] 发送失败:', err);
          this.queueMessage(data); // 加入消息队列
        }
      });
    } else {
      this.queueMessage(data); // 连接未就绪时缓存消息
    }
  }

  // 消息入队
  queueMessage(data) {
    this.messageQueue.push(data);
    console.log('[WebSocket] 消息已加入队列（当前队列长度）:', this.messageQueue.length);
  }

  // 发送队列中的消息
  flushQueue() {
    while (this.messageQueue.length > 0) {
      const msg = this.messageQueue.shift();
      this.send(msg);
    }
  }

  // 启动心跳检测
  startHeartbeat(data) {
	  
    this.heartbeatTimer = setInterval(() => {
      if (this.socketTask?.readyState === 1) {
        this.send(data);
      }
    }, this.heartbeatInterval);
  }

  // 停止心跳检测
  stopHeartbeat() {
    clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = null;
  }

  // 自动重连
  reconnect() {
    if (this.reconnectCount >= this.maxReconnect) {
      console.error('[WebSocket] 已达最大重连次数');
      return;
    }

    this.reconnectCount++;
    console.log(`[WebSocket] 第 ${this.reconnectCount} 次重连（${this.reconnectDelay}ms后）`);

    setTimeout(() => {
      if (!this.isManualClose) this.connect();
    }, this.reconnectDelay);
  }

  // 主动关闭连接
  close() {
    this.isManualClose = true;
    if (this.socketTask) {
      this.socketTask.close();
      this.socketTask = null;
    }
  }

  // 事件监听
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
  }

  // 移除监听
  off(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  // 触发事件
  emit(event, ...args) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => cb(...args));
    }
  }
}

export default WebSocketManager;