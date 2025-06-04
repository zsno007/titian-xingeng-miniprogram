Page({
  data: {},

  navigateToDigitalMuseum() {
    wx.navigateTo({
      url: '/pages/vr/vr'
    });
  },

  navigateToHaniCulture() {
    wx.navigateTo({
      url: '/pages/wenhua/wenhua'
    });
  },

  navigateToKnowledgeQuiz() {
    wx.navigateTo({
      url: '/pages/vr/vr'
    });
  },

  navigateToWeatherLive() {
    wx.navigateTo({
      url: '/pages/tianqi/tianqi'
    });
  },

  navigateToCommunity() {
    wx.navigateTo({
      url: '/pages/jiaoliu/jiaoliu'
    });
  },

  navigateToThemeTour() {
    wx.navigateTo({
      url: '/pages/shenduyou/shenduyou'
    });
  },
});