//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Welcome to XiaoxiazhihuWx',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      // url:'../logs/logs'
      // url: '../zhihu/splash'      
      url: '../zhihu/themelist'
    })
  },
  onLoad: function () {
    console.log('index.onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
