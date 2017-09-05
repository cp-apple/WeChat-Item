// pages/index/index.js
var cateInfo = require('../../data/cate.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cateInfo: cateInfo.cateInfo
    });
    console.log(this.data.cateInfo);
  },

  /*
   * 跳转到该服务的列表页面 
   */
  thisCateListTap:function(options){
    var cateId = options.currentTarget.dataset.cateId;  //服务类别编号
    wx.navigateTo({
      url: '/pages/index/cateList/cateList?cateId='+cateId,
    })
  },

  /*
   * 跳转到在线办理的列表页面 
   */
  goOnlineDeal: function (options) {
    wx.navigateTo({
      url: '/pages/index/onlineDeal/onlineDeal',
    })
  },

  /*
   * 跳转到服务网点的列表页面 
   */
  goServiceDot: function (options) {
    wx.navigateTo({
      url: '/pages/index/serviceDot/serviceDot',
    })
  }

})