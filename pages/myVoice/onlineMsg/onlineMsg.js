// 在线留言
Page({

  /**
   * 页面的初始数据
   */
  data: {
    giveWho:1,
    id: 0,
    index:0,
    appealType: ['咨询', '投诉', '建议', '表扬', '求助', '其他'],
    departmnets:['区教育局','民政局','区侨办','区人社局','区环保局','去交涉局'],
    objectAppealType:[{
      id:'zx',
      name:'咨询'
    }, {
      id:'ts',
      name: '投诉'
      }, {
        id:'jy',
        name: '建议'
    }, {
      id:'by',
      name: '表扬'
      }, {
        id:'qz',
        name: '求助'
    }, {
      id:'qt',
      name: '其他'
    }],
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    // objectMultiArray: [
    //   [
    //     {
    //       id: 0,
    //       name: '无脊柱动物'
    //     },
    //     {
    //       id: 1,
    //       name: '脊柱动物'
    //     }
    //   ], [
    //     {
    //       id: 0,
    //       name: '扁性动物'
    //     },
    //     {
    //       id: 1,
    //       name: '线形动物'
    //     },
    //     {
    //       id: 2,
    //       name: '环节动物'
    //     },
    //     {
    //       id: 3,
    //       name: '软体动物'
    //     },
    //     {
    //       id: 3,
    //       name: '节肢动物'
    //     }
    //   ], [
    //     {
    //       id: 0,
    //       name: '猪肉绦虫'
    //     },
    //     {
    //       id: 1,
    //       name: '吸血虫'
    //     }
    //   ]
    // ],
    objectMultiArray:[],
    multiIndex: [0, 0, 0],
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    var objectMultiArray=[];
    wx.request({
      url: 'http://cdpandora.vicp.io:18003/EventCommandCenter/GetEventTreeType', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          objectMultiArray:objectMultiArray.push(res.data)

        });
        console.log(that.data.objectMultiArray);
      }
    })
  },
  
  /**
   * 留言分类
   */
  bindPickerChange:function(e){
    var val = e.detail.value;   
    this.setData({
      index: val
    });
  },

  /**
   * 留言对象
   */
  bindPickerChange2: function (e) {
    this.setData({
      id: e.detail.value
    });
  },
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },

  /**
   * 给部门留言
   */
  giveDepartment:function(){
    this.setData({
      giveWho: 1
    });
  },
  /**
   * 给街道留言
   */
  giveStreet: function () {
    this.setData({
      giveWho: 2
    });
  },

  /**
   * 提交 
   */
  formSubmit: function (e) {    
    console.log(this.data.multiIndex, this.data.id, this.data.index);
    var indexLyType = this.data.index;
    console.log('indexLyType='+this.data.objectAppealType[indexLyType].id);   
    myFormData = e.detail.value;
    myFormData.indexLyType = this.data.objectAppealType[indexLyType].id;  //留言分类id
  }

})