const app = getApp();

//"list": "mini-antui/es/list/index",
//"list-item": "mini-antui/es/list/list-item/index"

Page({
  data:{
    flag:false,
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    const res = app.mpserverless.user.getInfo({
      authProvider: 'alipay_openapi',
    }).catch(console.error);
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  test() {
    my.showLoading({
      content: "加载中...",
      success: (res) => {
        app.mpserverless.function.invoke('getUsers', {
          name: 'zhang'
        }).then((res) => {
          my.alert({
            title: JSON.stringify(res.result)
          });
          my.hideLoading();   
        }).catch(console.error);
      },
      fail:(res)=>{
        my.hideLoading();
      }
    });
    my.getAuthCode({
      success: (res) => {
        console.log(JSON.stringify(res))
      },
    });
  },
});
