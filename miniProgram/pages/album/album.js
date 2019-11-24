// pages/album.js
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
      this.setData({
        albums: this.data.albums.concat(newAlbum)
      })
    }
    this.setData({
      dialogShow: false,
      addAlbumName:""
    })
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