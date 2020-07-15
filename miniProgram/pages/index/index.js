//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    userInfo: {},
  },

  onLoad: function () {
    wx.hideHomeButton();
    let userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
      })
    };

  }

})
