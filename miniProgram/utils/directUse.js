function directUse(){
    let SESSION_KEY = wx.getStorageSync("SESSION_KEY");
    let userInfo = wx.getStorageSync("userInfo");
    if (userInfo && SESSION_KEY) {
    console.log(userInfo ,SESSION_KEY,"fafafe");
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      wx.redirectTo({
        url: '/pages/index/index',
        fail: (e) => {
          console.log(e)
        }
      });
  }
}
module.exports = directUse;
