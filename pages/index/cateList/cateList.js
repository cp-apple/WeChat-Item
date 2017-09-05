// pages/index/cateList/cateList.js
var cateInfo = require('../../../data/cate.js');
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
    var cateInfoD = cateInfo.cateInfo, cateId, cateDetail;
    //获取对应详情信息
    for (var i in cateInfoD){   
      if (options.cateId == cateInfoD[i].cateId) {   //确定对应的列表页
        cateId = cateInfoD[i].cateId;
        cateDetail = cateInfoD[i].cateDetail;
      }
    }
    
    this.setData({
      cateId: cateId,
      cateDetail: cateDetail
    });   
  },

  /*
   * 到办理条件页面
   */
  goApplyConditionTap:function(options){
    console.log(options);
    var detailId = options.currentTarget.dataset.detailId,
      cateId = options.currentTarget.dataset.cateId;
    wx.navigateTo({
      url: '/pages/index/cateList/applyCondition/applyCondition?detailId=' + detailId + '&cateId=' + cateId,
    });
  }
});