// 你问我答
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    saySomething: [],
    iptValue: '',
    focus: false,
    microphone:1  //麦克风，1灰，2绿
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newDate = app.globalData.currentTime();
    this.setData({
      newDate: newDate
    });
  },

  /**
   * 发送消息,提交表单
   */
  formSubmit: function (e) {
    var sayValue = e.detail.value.sayValue;
    if (sayValue != '') {
      this.data.saySomething.push(e.detail.value.sayValue);
      this.setData({
        saySomething: this.data.saySomething,
        iptValue: '',
        focus: true
      });
    }

  },
  /**
   * 开始录音
   */
  startRecord: function (e) {
    var _that=this;
    _that.setData({
      microphone:2
    });
   
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        _that.data.saySomething.push(tempFilePath);
        _that.setData({
          saySomething: _that.data.saySomething
        });
        
        wx.showToast({
          title: '发送成功，音频文件路径为：' + tempFilePath,
        });
      },
      fail: function (res) {
        //录音失败
        wx.showToast({
          title: '录音失败。',
        });        
      },
      complete:function(){
        _that.setData({
          microphone: 1
        });
      }
    });   

    setTimeout(function () {
      //结束录音  
      wx.stopRecord();      
    }, 10000)
  },

  /**
    * 结束录音
    */
  endRecord: function (e) {
    wx.stopRecord();   
  }

})