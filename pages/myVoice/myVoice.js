// 我的声音
var problems=require('../../data/faq.js');
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
      problems: problems.problems
    });
  },
  /**
   * 你问我答页面
   */
  goYouQiA:function(){
    wx.navigateTo({
      url: '/pages/myVoice/youQiA/youQiA',
    });
  },

  /**
   * 在线留言页面
   */
  goOnlineMsg: function () {
    wx.navigateTo({
      url: '/pages/myVoice/onlineMsg/onlineMsg',
    });
  },

  /*
   * 查看全部问题
   */ 
  goPList:function(){
    wx.navigateTo({
      url: '/pages/myVoice/pList/pList',
    });
  },

  /*
   * 查看问题详情
   */
  goPDetail: function (options) {
    var faqId = options.currentTarget.dataset.faqId;
    wx.navigateTo({
      url: '/pages/myVoice/pDetail/pDetail?faqId=' + faqId,
    });
  },
})