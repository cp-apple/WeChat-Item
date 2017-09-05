// 个人中心
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        motto: 'Hello ' + userInfo.nickName,
      });      
    });

  },
 
  /*
   * 到我的办理页面
   */
  goMyBusiness:function(){
    wx.navigateTo({
      url: '/pages/pCenter/myBusiness/myBusiness',
    })
  },
  /*
   * 到我的个人资料
   */
  goMyInfo: function () {
    wx.navigateTo({
      url: '/pages/pCenter/myInfo/myInfo',
    })
  },
  /*
   * 到我的提问页面
   */
  goMyProblem: function () {
    wx.navigateTo({
      url: '/pages/pCenter/myProblem/myProblem',
    })
  },
  /*
   * 到平台介绍页面
   */
  goPlatForm: function () {
    wx.navigateTo({
      url: '/pages/pCenter/platform/platform',
    })
  }
})