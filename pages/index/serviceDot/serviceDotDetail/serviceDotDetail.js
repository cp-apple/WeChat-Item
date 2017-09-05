// 服务网点详情页
var sDotInfo = require('../../../../data/sDot.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {  
 
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sDotId = options.sDotId,
        sDotDetailId = options.sDotDetailId,
        sDotDname = options.sDotDname;
    //设置导航名称
    wx.setNavigationBarTitle({
      title: sDotDname,
    });
    this.setData({
      sDotInfo: sDotInfo.sDotInfo
    });
    var sDotInformation=this.data.sDotInfo,
        thisSDotInfo;
    //获取当前服务网点的信息
    for(var i in sDotInformation){
      if (sDotId == sDotInformation[i].sDotId){
        for (var j in sDotInformation[i].sDotDetail){
          if (sDotDetailId == sDotInformation[i].sDotDetail[j].sDotDetailId){
            thisSDotInfo = sDotInformation[i].sDotDetail[j];
            this.setData({
              thisSDotInfo: thisSDotInfo,
              markers: [{
                iconPath: "/images/cate2.png",
                id: 0,
                latitude: thisSDotInfo.sDotCoordinate[0],
                longitude: thisSDotInfo.sDotCoordinate[1],
                width: 20,
                height: 20
              }],

            });
          }
        }
      }
    }


  },

  
})