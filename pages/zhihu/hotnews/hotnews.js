// hotnews.js
Page({
  data: {
    stories:[],
    tops:[]
  },
  onLoad: function () {
      console.log('hotnews.onLoad');

      var that = this;
      // 加载数据
      wx.request({
        url: 'http://news-at.zhihu.com/api/4/news/latest',
        header:{"Content-Type":"application/json","Cache-Control":"no-cache"},
        success: function(res) {
            var stories = res.data.stories;
            var tops = res.data.top_stories;
            console.log('data = '+JSON.stringify(res.data));
            that.setData({
              stories:stories,
              tops:tops
            });
        },
        fail:function(error) {
            console.log(error)
        }
    });
  },
  onItemClick:function(event){
    var idx = event.currentTarget.dataset.idx;
    var item = this.data.stories[idx];
    console.log('item = '+JSON.stringify(item))
    var url =  '../detail/detail?id='+item.id+'&title='+item.title;
    // url = 'http://daily.zhihu.com/story/'+item.id;
    console.log('url = '+url);
     wx.navigateTo({url:url});
  },
  onTopClick:function(event){
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    console.log('id = '+id)
    var url =  '../detail/detail?id='+id+'&title='+title;
    console.log('url = '+url);
     wx.navigateTo({url:url});
  }
})