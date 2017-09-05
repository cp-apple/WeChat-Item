// 你问我答
var app= getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    saySomething: [],
    iptValue:'',
    focus: false
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
  formSubmit:function(e){
    var sayValue = e.detail.value.sayValue;
    if(sayValue!=''){
      this.data.saySomething.push(e.detail.value.sayValue);
      this.setData({
        saySomething: this.data.saySomething,
        iptValue: '',
        focus:true
      });
    }
    
  }
})