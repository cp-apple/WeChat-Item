// 常见问题
var problems=require('../../../data/faq.js');
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
   * 查看问题详情页面
   */
  goPDetail: function (options) {
    var faqId = options.currentTarget.dataset.faqId;
    wx.navigateTo({
      url: '/pages/myVoice/pDetail/pDetail?faqId=' + faqId,
    });
  }
})