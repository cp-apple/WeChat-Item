// 个人中心
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
  
  },

  /**
   * 修改头像
   */
  goEditHImg: function () {
    wx.navigateTo({
      url: '/pages/pCenter/myInfo/editHImg/editHImg',
    });
  },

  /**
     * 修改资料
     */
  goEditInfo: function () {
    wx.navigateTo({
      url: '/pages/pCenter/myInfo/editInfo/editInfo',
    });
  },

  /**
   * 修改密码
   */
  goEditPwd: function () {
    wx.navigateTo({
      url: '/pages/pCenter/myInfo/editPwd/editPwd',
    });
  }
})