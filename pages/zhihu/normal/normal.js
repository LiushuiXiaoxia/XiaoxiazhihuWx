// normal.js
Page({
  data: {
    stories:[],
    title:null
  },
  onLoad: function (options) {
        console.log('normal.onLoad');

        var that = this;
        // 加载数据
        var url = 'http://news-at.zhihu.com/api/4/theme/'+options.id;
        console.log('url = '+url);
        wx.request({
        url: url,
        header:{"Content-Type":"application/json","Cache-Control":"no-cache"},
        success: function(res) {
            var stories = res.data.stories;
            console.log('data = '+JSON.stringify(res.data));
            that.setData({
                stories:stories
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
    onItemClick:function(event){
        var idx = event.currentTarget.dataset.idx;
        var item = this.data.stories[idx];
        console.log('item = '+JSON.stringify(item))
        var url =  '../detail/detail?id='+item.id+'&title='+item.title;
        // url = 'http://daily.zhihu.com/story/'+item.id;
        console.log('url = '+url);
        wx.navigateTo({url:url});
    }
})