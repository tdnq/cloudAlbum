// pages/single/single.js
const host = require("../../services/api.js").host;
const photoApi = require("../../services/api.js").photoApi;
const request = require("../../utils/request.js");
const SESSION_KEY = wx.getStorageSync("SESSION_KEY");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgs:[],
    albumName:""

  },
  //上传图片
  uploadImg:function(){
    let that=this;
    wx.chooseImage({
      success: function(res) {
        wx.uploadFile({
          url: photoApi,
          filePath: res.tempFilePaths[0],
          name: 'photo',
          formData: {
            'userId': SESSION_KEY.openId,
            'album':that.data.albumName
          },
          success:function(res){
            if(res.statusCode===200){
              let parseRes=JSON.parse(res.data);
              parseRes.url = host + "/" + parseRes.url;
              that.setData({
                imgs: that.data.imgs.concat(parseRes)
              })

            }
          },
          fail:function(err){
            throw new Error(err);
          }
        })
        // that.setData({
        //   imgs: that.data.imgs.concat(res.tempFilePaths)
        // })
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      albumName:options.album
    });

    //初始化照片
    let that = this;
    let getPhotoApi = `${photoApi}?userId=${SESSION_KEY.openId}&album=${this.data.albumName}`;
    wx.request({
      url: getPhotoApi,
      success: function (res) {
        res.data.forEach((item,index)=>{
          res.data[index].url = host +"/"+res.data[index].url;
        });
        that.setData({
          imgs: that.data.imgs.concat(res.data)
        });
      }
      //验证信息
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})