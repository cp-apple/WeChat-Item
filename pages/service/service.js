// 生活服务
var lifeService=require('../../data/life.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleTag:'政务服务'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lifeService:lifeService.lifeService
    });
  },
  /*
   * 点击政务服务
   */ 
  zwServiceTit:function(){
    this.setData({
      titleTag:'政务服务'
    });
  },
  /*
   * 点击生活服务
   */
  shServiceTit: function () {
    this.setData({
      titleTag: '生活服务'
    });
  },
  /*
   * 到服务详情页
   */
  golifeDetail:function(options){
    var lifeId = options.currentTarget.dataset.lifeId,
      lifeName = options.currentTarget.dataset.lifeName;
    wx.navigateTo({
      url: '/pages/service/serviceDetail/serviceDetail?lifeId=' + lifeId + '&lifeName=' + lifeName,
    });
  }
})