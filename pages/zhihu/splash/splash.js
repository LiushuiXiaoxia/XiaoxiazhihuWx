// splash.js
Page({
  data: {
    splashData:{
      text:"Noah Silliman",
      img:"https://pic4.zhimg.com/v2-b427763c3d75885c041d4de069923e93.jpg"
    }
  },
  onLoad: function () {
      console.log('splash.onLoad');

      var that = this
      // 加载数据
      wx.request({
        url: 'https://news-at.zhihu.com/api/4/start-image/1080*1776',
        header:{"Content-Type":"application/json","Cache-Control":"no-cache"},
        success: function(res) {
            var data = res.data;
            console.log('data = '+JSON.stringify(data));
            that.setData({splashData:data});

            console.log('splash.gotoNext');  
            wx.navigateTo({url: '../themelist/themelist'});
        },
        fail:function(error) {
            console.log('error = '+error)

            console.log('splash.gotoNext');  
            wx.navigateTo({url: '../themelist/themelist'});
        }
    });
  }
})