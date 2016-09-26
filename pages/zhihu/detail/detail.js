// detail.js
Page({
  data: {
    detail:null,
    title:null
  },
  onLoad: function (options) {
    console.log('hotnews.onLoad');

    var that = this;
    // 加载数据
    var url = 'http://news-at.zhihu.com/api/4/news/'+options.id;
    console.log('url = '+url);
    wx.request({
        url: url,
        header:{"Content-Type":"application/json","Cache-Control":"no-cache"},
        success: function(res) {
            var detail = res.data;
            console.log('data = '+JSON.stringify(detail));
            that.setData({
                detail:detail
            });
        },
        fail:function(error) {
            console.log(error)
        }
    });
    this.title = options.title;
  },
  onReady: function () {
      wx.setNavigationBarTitle({
          title: this.title
      });
  },
})