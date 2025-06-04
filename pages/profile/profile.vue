<template>
  <!-- 专注作物 -->
  <view class="focus-crops">
    <text class="title">专注作物</text>
    <text class="all">全部 >></text>
    <view class="crop-items">
      <view class="crop-item" @tap="navigateToWaitPayment">
        <icon type="waiting" size="24" color="#666" />
        <text class="text">待支付</text>
      </view>
      <view class="crop-item" @tap="navigateToWaitReceipt">
        <icon type="notice" size="24" color="#666" />
        <text class="text">待收货</text>
        <view class="badge">3</view>
      </view>
      <view class="crop-item" @tap="navigateToCompleted">
        <icon type="success" size="24" color="#666" />
        <text class="text">已完成</text>
      </view>
      <view class="crop-item" @tap="navigateToAfterSales">
        <icon type="info" size="24" color="#666" />
        <text class="text">售后</text>
      </view>
    </view>
  </view>

  <!-- 用户设置和偏好 -->
  <view class="user-settings">
    <text class="title">用户设置和偏好</text>
    <view class="setting-items">
      <view class="setting-item" @tap="navigateToInfoManagement">
        <icon type="settings" size="24" color="#666" />
        <text class="text">信息管理</text>
      </view>
      <view class="setting-item" @tap="navigateToPrivacySettings">
        <icon type="privacy" size="24" color="#666" />
        <text class="text">隐私设置</text>
      </view>
      <view class="setting-item" @tap="navigateToDataImport">
        <icon type="data" size="24" color="#666" />
        <text class="text">数据导入</text>
      </view>
      <view class="setting-item" @tap="navigateToGovernmentServices">
        <icon type="service" size="24" color="#666" />
        <text class="text">政府服务</text>
      </view>
    </view>
    <!-- 底部导航栏 -->
    <view class="tab-bar">
      <navigator url="/pages/index/index" class="tab-item" hover-class="none">
        <image src="/images/home.png" class="tab-icon"></image>
        <text class="tab-text">首页</text>
      </navigator>
      <navigator url="/pages/activity/activity" class="tab-item" hover-class="none">
        <image src="/images/mall.png" class="tab-icon"></image>
        <text class="tab-text">商城</text>
      </navigator>
      <navigator url="/pages/mall/mall" class="tab-item" hover-class="none">
        <image src="/images/activity.png" class="tab-icon"></image>
        <text class="tab-text">活动</text>
      </navigator>
      <navigator url="/pages/profile/profile" class="tab-item" hover-class="none">
        <image src="/images/profile.png" class="tab-icon"></image>
        <text class="tab-text">我的</text>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    navigateToWaitPayment() {
      this.$router.push('/pages/waitPayment/waitPayment');
    },
    navigateToWaitReceipt() {
      this.$router.push('/pages/waitReceipt/waitReceipt');
    },
    navigateToCompleted() {
      this.$router.push('/pages/completed/completed');
    },
    navigateToAfterSales() {
      this.$router.push('/pages/afterSales/afterSales');
    },
    navigateToInfoManagement() {
      this.$router.push('/pages/infoManagement/infoManagement');
    },
    navigateToPrivacySettings() {
      this.$router.push('/pages/privacySettings/privacySettings');
    },
    navigateToDataImport() {
      this.$router.push('/pages/dataImport/dataImport');
    },
    navigateToGovernmentServices() {
      this.$router.push('/pages/tousu/tousu');
    }
  }
}
</script>

<style>
.container {
  background-color: #f5fbf2;
  padding: 30rpx;
  min-height: 100vh;
}

/* 头部信息 */
.header {
  display: flex;
  align-items: center;
  margin-bottom: 40rpx;
}

.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 60rpx;
  margin-right: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
}

.username {
  font-size: 40rpx;
  color: #333;
  font-weight: bold;
}

/* 专注币 */
.focus-coins {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #a8d8b9, #7bcfa6);
  padding: 30rpx;
  border-radius: 16rpx;
  margin-bottom: 40rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.label {
  font-size: 34rpx;
  color: #fff;
}

.value {
  font-size: 34rpx;
  color: #fff;
  font-weight: bold;
}

/* 专注作物 */
.focus-crops {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 40rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.title {
  font-size: 34rpx;
  color: #333;
  font-weight: bold;
}

.all {
  font-size: 28rpx;
  color: #888;
  float: right;
}

.crop-items {
  display: flex;
  justify-content: space-around;
  margin-top: 30rpx;
  position: relative;
}

.crop-item {
  text-align: center;
  flex: 1;
  padding: 20rpx;
  border-radius: 12rpx;
  transition: background-color 0.3s ease;
}

.crop-item:hover {
  background-color: #f0f8e9;
}

.icon {
  width: 90rpx;
  height: 90rpx;
  margin-bottom: 16rpx;
  border-radius: 16rpx;
}

.text {
  font-size: 28rpx;
  color: #333;
}

.badge {
  position: absolute;
  top: -10rpx;
  right: 50rpx;
  width: 40rpx;
  height: 40rpx;
  background-color: #ff4d4f;
  border-radius: 50%;
  color: #fff;
  font-size: 24rpx;
  line-height: 40rpx;
  text-align: center;
  z-index: 1;
}

/* 用户设置和偏好 */
.user-settings {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.setting-items {
  display: flex;
  justify-content: space-around;
  margin-top: 30rpx;
}

.setting-item {
  text-align: center;
  flex: 1;
  padding: 20rpx;
  border-radius: 12rpx;
  transition: background-color 0.3s ease;
}

.setting-item:hover {
  background-color: #f0f8e9;
}

.setting-item .icon {
  width: 90rpx;
  height: 90rpx;
  margin-bottom: 16rpx;
  border-radius: 16rpx;
}

.setting-item .text {
  font-size: 28rpx;
  color: #333;
}
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 1000;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
}

.tab-text {
  font-size: 12px;
  color: #666;
}
</style> 