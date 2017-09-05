// 常见问题详情
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
    var faqId = options.faqId;
    var allProb = problems.problems;
    for (var i in allProb){
      if (allProb[i].faqId==faqId){
        this.setData({
          aProblemDetail: allProb[i]
        });
      }
    }     
  }, 
})