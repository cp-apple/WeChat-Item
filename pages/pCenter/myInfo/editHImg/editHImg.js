// 修改头像
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
   * 上传头像
  */
  uploadImg:function(){
    var that=this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          tempFilePaths: tempFilePaths
        });
       
      }
    })
  },
  /**
   * 保存提交
  */
  formSubmit:function(){
    wx.uploadFile({
      url: 'http://118.114.77.76:8098/api/File/upload', //仅为示例，非真实的接口地址
      filePath: this.data.tempFilePaths[0],
      name: 'file',
      formData: {
        //'user': 'test'
      },
      success: function (res) {
        var data = res.data
        console.log(data);
        //do something
      },
      fail: function (error) {
        console.log(error);
      }
    });
  }
})