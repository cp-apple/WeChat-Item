// 服务网点
var sDotInfo = require('../../../data/sDot.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sDotInfo: sDotInfo.sDotInfo
    });
  },

  /**
   * 点击显示隐藏内容
   */
  showHideCon: function (options) {
    var sdotId = options.currentTarget.dataset.sdotId;
    this.setData({
      showIndex: sdotId
    });
  },

  /**
   * 到服务网点详情页
   */
  goSdotDetail:function(options){
    var sDotId = options.currentTarget.dataset.sDotId,
        sDotDetailId = options.currentTarget.dataset.sDotDetailId,
        sDotDname = options.currentTarget.dataset.sDotDname;
   
    wx.navigateTo({
      url: "/pages/index/serviceDot/serviceDotDetail/serviceDotDetail?sDotId=" + sDotId + '&sDotDetailId=' + sDotDetailId + '&sDotDname=' + sDotDname,
    })
  },

  /**
   * 打电话
   */
  callYou:function(options){
    var tel=options.currentTarget.dataset.tel;
    wx.makePhoneCall({
      phoneNumber: tel
    })
  },
})