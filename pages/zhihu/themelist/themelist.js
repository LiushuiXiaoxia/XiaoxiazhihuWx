// themes.js
Page({
  data: {
    themes:[]
  },
  onLoad: function () {
      console.log('themes.onLoad');

      var that = this;
      // 加载数据
      wx.request({
        url: 'http://news-at.zhihu.com/api/4/themes',
        header:{"Content-Type":"application/json"},
        success: function(res) {
            var data = res.data;
            console.log('data = '+JSON.stringify(data));
            var temp = [];
            temp.push({'name':'今日热闻','thumbnail':null,'description':'今日热闻'})
            for(var i in data.others){
              temp.push(data.others[i]);
            }            
            that.setData({themes:temp});
        },
        fail:function(error) {
            console.log(error)
        }
    });
  },
  onItemClick:function(event){
    var idx = event.currentTarget.dataset.idx;
    var item = this.data.themes[idx];
    console.log('item = '+JSON.stringify(item))
    if(item.id){
      wx.navigateTo({url: '../normal/normal?id='+item.id+'&title='+item.name});
    } else {
      wx.navigateTo({url: '../hotnews/hotnews'});
    }
  }
})