/*
 * @Author: your name
 * @Date: 2022-02-25 18:15:01
 * @LastEditTime: 2022-02-25 18:16:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /xiepeione.github.io/index.js
 */
(function () {
  $.ajax({
    url: '',
    data: { "sdkUrl": window.location.href },
    type: "POST",
    success: function (data) {
      var data = JSON.parse(data);
      if (data.httpcode == "200") {
        wx.config({
          beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
          debug: false,
          appId: data.result.appId,
          timestamp: data.result.timestamp,
          nonceStr: data.result.noncestr,
          signature: data.result.signature,
          jsApiList: ["scanQRCode"]
        });
        wx.error(function (res) {
          console.log(res);
        });
      }
    }
  })
})()