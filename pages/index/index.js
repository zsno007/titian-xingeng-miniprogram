// pages/index/index.js
Page({
  data: {},

  onFocusPlan: function() {
    // 处理专注计划点击事件
    wx.navigateTo({
      url: '/pages/plan/plan', // 目标页面路径
    });
  },

  onMyTerrace: function() {
    // 处理我的梯田点击事件
    wx.navigateTo({
      url: '/pages/titian/titian', // 目标页面路径
    });
  },

  onVRFarm: function() {
    // 处理VR农田点击事件
    wx.navigateTo({
      url: '/pages/vr/vr', // 目标页面路径
    });
  },

  onGroupPlanting: function() {
    // 处理多人种植房间点击事件
  },

  onViewAllTasks: function() {
    // 处理查看全部任务点击事件
  },

  onStartTask: function() {
    // 处理开始任务点击事件
  },

  onHome: function() {
    // 处理首页点击事件
  },

  onShop: function() {
    // 处理商城点击事件
  },

  onActivity: function() {
    // 处理活动点击事件
  },

  onProfile: function() {
    // 处理我的点击事件
  }
});