<template>
  <!-- pages/index/index.wxml -->
  <view class="container">
    <!-- 标题区域 -->
    <view class="title">我的梯田</view>

    <!-- 功能模块区域 -->
    <view class="modules">
      <view class="module pink" @tap="onFocusPlan">
        <text>专注计划</text>
        <image src="/images/arrow-right.png"></image>
      </view>
      <view class="module yellow" @tap="onMyTerrace">
        <image src="/images/clock.png"></image>
        <text>我的梯田</text>
      </view>
      <view class="module yellow" @tap="onVRFarm">
        <image src="/images/close.png"></image>
        <text>VR农田</text>
      </view>
      <view class="module green" @tap="onGroupPlanting">
        <image src="/images/group-planting.png"></image>
        <text>多人种植房间</text>
      </view>
    </view>

    <!-- 今日任务区域 -->
    <view class="today-task">
      <text class="title">今日任务</text>
      <text class="view-all">查看全部</text>
      <view class="task-item">
        <text>记单词</text>
        <text>1小时</text>
        <button class="start-btn" @tap="onFocusPlan">START</button>
      </view>
    </view>

    <!-- 底部标签栏 -->
    <view class="container">
      <!-- 页面内容 -->
      
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
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {
    onFocusPlan() {
      // 处理专注计划点击事件
      // 使用 Vue Router 替代 wx.navigateTo
      this.$router.push('/pages/plan/plan');
    },

    onMyTerrace() {
      // 处理我的梯田点击事件
      this.$router.push('/pages/titian/titian');
    },

    onVRFarm() {
      // 处理VR农田点击事件
      this.$router.push('/pages/vr/vr');
    },

    onGroupPlanting() {
      // 处理多人种植房间点击事件
    },

    onViewAllTasks() {
      // 处理查看全部任务点击事件
    },

    onStartTask() {
      // 处理开始任务点击事件
    },

    onHome() {
      // 处理首页点击事件
    },

    onShop() {
      // 处理商城点击事件
    },

    onActivity() {
      // 处理活动点击事件
    },

    onProfile() {
      // 处理我的点击事件
    }
  }
}
</script>

<style>
/* pages/index/index.wxss */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E6FFFA;
}

.top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #6FCF97;
}

.title {
  font-size: 24px;
  margin: 20px 0;
}

.modules {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.module {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.module.pink {
  background: linear-gradient(135deg, #FFB6C1, #FF69B4);
}

.module.yellow {
  background: linear-gradient(135deg, #FFFFCC, #FFE6CC);
}

.module.green {
  background: linear-gradient(135deg, #90EE90, #32CD32);
}

.today-task {
  width: 90%;
  margin: 20px 0;
}

.today-task .title {
  font-size: 20px;
  margin-bottom: 10px;
}

.today-task .view-all {
  float: right;
  color: #6A5ACD;
}

.task-item {
  background-color: #32CD32;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.start-btn {
  background-color: #FFD700;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
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