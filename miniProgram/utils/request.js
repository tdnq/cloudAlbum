function request(url,data="",method){
  return new Promise((resolve,reject)=>{
      wx.request({
        url: url,
        data: data,
        header: {},
        method: method,
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          resolve(res);
        },
        fail: function(res) {
          wx.showToast({
            title: '网络出错，请重试',
          });
          reject(res);
        },
        complete: function(res) {
          console.log("请求完成",res);
        },
      })
  })
}

module.exports=request;