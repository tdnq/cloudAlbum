//index.js
const directUse = require("../../utils/directUse.js");
//获取应用实例
const app = getApp()
const userLogInApi = require("../../services/api.js").userLogInApi;
const request = require("../../utils/request.js");
Page({
  data: {
    motto: 'Hello!',
    isAuth:false
  },
  _login: function () {
    var that=this;
    wx.showLoading({
      title: '正在登录...',
      mask:true
    });
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let code = res.code;
        request(userLogInApi, { code }, "POST").then(function (res) {
          if(res.statusCode===200){
            wx.setStorageSync("SESSION_KEY", res.data);
            console.log("登录成功",res)
            directUse()
            wx.hideLoading();
          }
        });
      }
    })
  },
  getUserInfo: function(e) {
    wx.setStorageSync("userInfo", e.detail.userInfo)
    this.setData({
      isAuth:true
    })
    this._login();
  }
})