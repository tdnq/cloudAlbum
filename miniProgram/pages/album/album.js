// pages/album.js

const albumApi = require("../../services/api.js").albumApi;
const request = require("../../utils/request.js");
const SESSION_KEY = wx.getStorageSync("SESSION_KEY").openId;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dialogShow: false,
    buttons: [{ text: '取消' }, { text: '确定' }],
    albums:[
    ],
    addAlbumName:""
  },

  showAddAlbumDialog:function(e) {
    this.setData({
      dialogShow: true
    })
  },
  addAlbumDeal: function (e){
    let isAdd=e.detail.index===1;
    if(isAdd){
      let newAlbum={
        name:this.data.addAlbumName,
        count:0
      };
      //远端增加相册
      let that=this;
      let resParams={
        userId:SESSION_KEY,
        name:this.data.addAlbumName
      };
      request(albumApi,resParams,"POST").then(function(res){
        if (res.statusCode===200){
        that.setData({
          albums: that.data.albums.concat(res.data),
          dialogShow: false,
          addAlbumName: ""
        })
        }
      });
    }
  },
  addAlbumInput:function(e){
    this.setData({
      addAlbumName:e.detail.value
    })
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that=this;
      let getAlbumApi = `${albumApi}?userId=${SESSION_KEY}`
      wx.request({
        url: getAlbumApi,
        success: function (res) {
          console.log(res)
          that.setData({
            albums: that.data.albums.concat(res.data)
          })
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