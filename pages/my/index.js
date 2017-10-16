//index.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');

Page({
  onShow: function () {
    var that = this;
    that.setData({
      userInfo:app.globalData.userInfo
    });

    util.req('index.php?s=api/info/mycount',{sk:app.globalData.sk},function(data){
      that.setData({infoCount:data.data});
    })

    util.req('index.php?s=api/appointment/mycount', { sk: app.globalData.sk }, function (data) {
      that.setData({ appointmentCount: data.data });
    })

    

  },

})
