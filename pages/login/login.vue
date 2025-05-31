<template>
  <view class="login-bg">
    <image class="bg-img" src="/static/terrace_bg.jpg" mode="aspectFill"></image>
    <view class="login-content">
      <view class="login-welcome">
        <view class="title-main">WELCOME TO</view>
        <view class="title-sub">梯田心耕</view>
      </view>
      <view class="login-panel">
        <view class="login-title">登录</view>
        <view class="input-group">
          <view class="input-label">账号</view>
          <input class="login-input" placeholder="请输入账号" />
        </view>
        <view class="input-group">
          <view class="input-label">密码</view>
          <input class="login-input" type="password" placeholder="请输入密码" />
        </view>
        <button class="login-btn" @click="onLogin">立即登录</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    onLogin() {
      uni.navigateTo({ url: '/pages/home/home' });
    }
  }
}
</script>

<style scoped>
.login-bg {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.login-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
.login-welcome {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 30rpx;
}
.title-main {
  color: #fff;
  font-size: 38rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
  text-shadow: 0 2rpx 8rpx #333;
}
.title-sub {
  color: #fff;
  font-size: 54rpx;
  font-weight: bold;
  margin-bottom: 0;
  text-shadow: 0 2rpx 8rpx #333;
}
.login-panel {
  flex: 1;
  background: #fff;
  border-radius: 40rpx 40rpx 0 0;
  padding: 60rpx 40rpx 40rpx 40rpx;
  box-shadow: 0 8rpx 32rpx rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.login-title {
  font-size: 44rpx;
  font-weight: bold;
  margin-bottom: 40rpx;
  color: #222;
  text-shadow: 0 2rpx 8rpx #eee;
}
.input-group {
  margin-bottom: 36rpx;
}
.input-label {
  font-size: 28rpx;
  color: #222;
  margin-bottom: 8rpx;
  font-weight: bold;
}
.login-input {
  width: 100%;
  height: 64rpx;
  background: #f3f3f3;
  border-radius: 16rpx;
  padding: 0 24rpx;
  font-size: 28rpx;
  border: none;
  margin-bottom: 8rpx;
}
.login-btn {
  width: 100%;
  background: #4ec08b;
  color: #fff;
  font-size: 32rpx;
  border-radius: 40rpx;
  padding: 18rpx 0;
  margin-top: 30rpx;
  box-shadow: 0 4rpx 16rpx rgba(76,192,139,0.12);
}
</style> 