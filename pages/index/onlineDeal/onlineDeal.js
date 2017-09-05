// 在线办理
var cateInfo = require('../../../data/cate.js');
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
      cateInfo: cateInfo.cateInfo
    });
    console.log(this.data.cateInfo);

  },

  /**
   * 点击显示隐藏内容
   */  
  showHideCon:function(options){
    var cateId=options.currentTarget.dataset.cateId;
    this.setData({
      showIndex:cateId
    });
  },
  /**
   * 去申请办理页面
   */
  goApplyHandle:function(options){
    var cateId = options.currentTarget.dataset.cateId,
        detailId = options.currentTarget.dataset.detailId,
        dealTit = options.currentTarget.dataset.dealTit,
        isTap = options.currentTarget.dataset.isTap;

    if(isTap==true){  //如果可以办理，则跳转到办理页面
      wx.navigateTo({
        url: '/pages/index/cateList/applyCondition/applyCondition?cateId=' + cateId + '&detailId=' + detailId + '&dealTit=' + dealTit+ '&page=onlineHandle',
      });
    }
        
  }

})
