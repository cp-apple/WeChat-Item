// 我的办理
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取办理信息
    wx.request({
      url: 'http://117.177.223.40:16004/api/Bus/List', //仅为示例，并非真实的接口地址
      method:'POST',
      data: {
        keyName: '511324199508273560',
        state:'',
        self:true,
        rows:50, 
        page:1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var logData = res.data.rows;
        for (var i in logData){
          logData[i].Logs = logData[i].Logs.substr(0, logData[i].Logs.length-1);      
          logData[i].Logs = logData[i].Logs.split('$');      
        }
        that.setData({
          logData: logData
        });
      }
    });
  },

  /**
   * 展示日志详情
   */
  showCon: function (options) {
    var index=options.currentTarget.dataset.index;
    this.setData({
      isShow:index
    });
  },

})