// 在线办理表单页面
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
    //设置标题
    var dealTit = options.dealTit;
    this.setData({
      index: 0,
      dealTit: dealTit
    });
    wx.setNavigationBarTitle({
      title: dealTit,
    });

    //获取受理中心名称
    var handleCenterObj = JSON.parse('[{"id":"510104021000009","value":"盐市口街道办事中心"},{"id":"510104022000010","value":"春熙路街道办事中心"},{"id":"510104024000008","value":"合江亭街道办事中心"},{"id":"510104025000005","value":"水井坊街道办事中心"},{"id":"510104025000006","value":"书院街街道办事中心"},{"id":"510104026000007","value":"莲新街道办事中心"},{"id":"510104026000011","value":"牛市口街道办事中心"},{"id":"510104027000013","value":"龙舟路街道办事中心"},{"id":"510104028000004","value":"双桂路街道办事中心"},{"id":"510104029000012","value":"督院街街道办事中心"},{"id":"510104030000014","value":"沙河街道办事中心"},{"id":"510104031000015","value":"东光街道办事中心"},{"id":"510104032000016","value":"狮子山街道办事中心"},{"id":"510104035000017","value":"成龙路街道办事中心"},{"id":"510104036000018","value":"柳江街道办事中心"},{"id":"510104037000019","value":"三圣街道办事中心"}]'),
      handleCenterArr = [];
    for (var i in handleCenterObj) {
      handleCenterArr.push(handleCenterObj[i].value)
    }
    this.setData({
      handleCenterObj: handleCenterObj,
      handleCenterArr: handleCenterArr
    });

  },

  //受理中心名称改变
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 照片上传
   */
  chooseImg: function (options) {
    var _that = this,
      imgBoxId = options.currentTarget.dataset.imgBoxId;

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        _that.setImgBox(imgBoxId, tempFilePaths);      
      }
    })
  },
  /**
   * 设置图片框选
   */
  setImgBox: function (imgBoxId, tempFilePaths) {
    console.log(imgBoxId, tempFilePaths);
    var _that = this;
    switch (imgBoxId*1) {
      case 1:
        _that.setData({
          imgSrc1: tempFilePaths[0],
          imgShow1: true
        });
        break;
      case 2:
        _that.setData({
          imgSrc2: tempFilePaths[0],
          imgShow2: true
        });
        break;
      case 3:
        _that.setData({
          imgSrc3: tempFilePaths[0],
          imgShow3: true
        });
        break;
      default: {
        wx.showToast({
          title: '上传图片失败。',
          icon: 'success',
          duration: 2000
        });
        break;
      }
    }
  }
})