//app.js
const directUse=require("./utils/directUse.js");
App({
  onLaunch: function () {
    // 获取用户信息
        directUse()
  },
  globalData: {
    userInfo: null
  }
})