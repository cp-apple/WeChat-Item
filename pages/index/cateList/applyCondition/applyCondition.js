// 申报条件展示页面
var cateInfo=require('../../../../data/cate.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCon:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var detailId = options.detailId, 
      dealTit = options.dealTit,
      cateId = options.cateId,
      page=options.page;
    
    //从在线服务过来的
    if (page =='onlineHandle'){
      this.setData({
        page: 'onlineHandle',
        dealTit: dealTit
      });      
    }

    var cateInfoD = cateInfo.cateInfo,cateDetail,applyDetail;
    //获取对应类别小项的申请详情
    for (var i in cateInfoD) {
      if (cateId == cateInfoD[i].cateId) {   //确定对应的列表页
        cateDetail = cateInfoD[i].cateDetail;
        for (var j in cateDetail){
          if (detailId == cateDetail[j].detailId) {
            applyDetail = cateDetail[j].applyCondition;   //确定申请详情项
          }
        }
      }
    }
    this.setData({
      applyCondition: applyDetail
    });
    console.log(this.data.applyCondition.applyCon);    
  },

  /*
   * 点击显示申报相关内容详情
   */
  showApplyConTap:function(options){
    var applyIndex = options.currentTarget.dataset.applyIndex;
    this.setData({
      showCon: applyIndex
    });
  },

  /**
   * 去在线办理form表单页面
   */
  oHandlePage:function(options){
    wx.navigateTo({
      url: '/pages/index/onlineDeal/oHandlePage/oHandlePage?dealTit=' + this.data.dealTit,
    });
  }
});