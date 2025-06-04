Page({
  navigateToWaitPayment() {
    wx.navigateTo({ url: '/pages/waitPayment/waitPayment' });
  },
  navigateToWaitReceipt() {
    wx.navigateTo({ url: '/pages/waitReceipt/waitReceipt' });
  },
  navigateToCompleted() {
    wx.navigateTo({ url: '/pages/completed/completed' });
  },
  navigateToAfterSales() {
    wx.navigateTo({ url: '/pages/afterSales/afterSales' });
  },
  navigateToInfoManagement() {
    wx.navigateTo({ url: '/pages/infoManagement/infoManagement' });
  },
  navigateToPrivacySettings() {
    wx.navigateTo({ url: '/pages/privacySettings/privacySettings' });
  },
  navigateToDataImport() {
    wx.navigateTo({ url: '/pages/dataImport/dataImport' });
  },
  navigateToGovernmentServices() {
    wx.navigateTo({ url: '/pages/tousu/tousu' });
  }
});