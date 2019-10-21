const MPServerless = require('@alicloud/mpserverless-sdk');
const mpserverless = new MPServerless({
  uploadFile: my.uploadFile,
  request: my.request,
  getAuthCode: my.getAuthCode
}, {
  // 配置参考 https://help.aliyun.com/document_detail/123251.html?spm=a2c4g.11186623.6.548.48395db9KiePV4#title-zb1-mhj-8vw
  appId: '2019092667828251', //请自行填入
  spaceId: 'e3c3c093-b223-4dc4-bb1e-a61f90ef715e',//请自行填入
  clientSecret: 'Byqpkl43/W/qFJC9i+0P3w==',//请自行填入
  endpoint: 'https://api.bspapp.com'
});

App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  mpserverless
});
