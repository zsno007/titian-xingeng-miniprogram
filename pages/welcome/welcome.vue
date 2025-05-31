<template>
  <view class="welcome-container">
    <image class="bg-img" src="/static/terrace_bg.jpg" mode="aspectFill"></image>
    <view class="overlay">
      <view class="title-main">WELCOME TO</view>
      <view class="title-sub">梯田心耕</view>
      <button class="start-btn" @click="goLogin">开启种植专注之旅</button>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goLogin() {
      uni.navigateTo({ url: '/pages/login/login' });
    }
  }
}
</script>

<style scoped>
.welcome-container {
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
.overlay {
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.15);
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
  margin-bottom: 60rpx;
  text-shadow: 0 2rpx 8rpx #333;
}
.start-btn {
  background: #4ec08b;
  color: #fff;
  font-size: 32rpx;
  border-radius: 40rpx;
  padding: 18rpx 60rpx;
  margin-top: 40rpx;
  box-shadow: 0 4rpx 16rpx rgba(76,192,139,0.2);
}
</style> 