// 服务详情页
var lifeService=require('../../../data/life.js');
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
    var lifeName=options.lifeName,
      lifeId = options.lifeId;
    wx.setNavigationBarTitle({
      title: lifeName,
    });

    for(var i in lifeService.lifeService){
      if (lifeService.lifeService[i].lifeId == lifeId){
        this.setData({
          sDetail: lifeService.lifeService[i].lifeDetail
        });
      }
    }
    console.log(this.data.sDetail);
  },

  
})