// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/imgs/shop/shop_1.png",
      "/imgs/shop/shop_2.png",
      "/imgs/shop/shop_3.png"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 100,
    circular: true,
    array:[
      {
        img: "/imgs/index/icon_1.jpg",
        title: "美食"
      },
      {
        img: "/imgs/index/icon_2.jpg",
        title: "猫眼电影"
      },
      {
        img: "/imgs/index/icon_3.jpg",
        title: "酒店住宿"
      },
      {
        img: "/imgs/index/icon_4.jpg",
        title: "休闲娱乐"
      },
      {
        img: "/imgs/index/icon_5.jpg",
        title: "外卖"
      },
      {
        img: "/imgs/index/icon_6.jpg",
        title: "KTV"
      },
      {
        img: "/imgs/index/icon_7.jpg",
        title: "丽人"
      },
      {
        img: "/imgs/index/icon_8.jpg",
        title: "景点门票"
      },
      {
        img: "/imgs/index/icon_9.jpg",
        title: "火车票"
      },
      {
        img: "/imgs/index/icon_10.jpg",
        title: "民宿/公寓"
      },
    ],
    items: [
      {
        img: "/imgs/shop/shop_1.png",
        title: "西虹市首富",
        state: "12.4km",
        loc: "影院：万达国际影城",
        charge: "￥56.0"
      },
      {
        img: "/imgs/shop/shop_2.png",
        title: "邪不压正",
        state: "23km",
        loc: "影院：万达国际影城",
        charge: "￥56.0"
      },
      {
        img: "/imgs/shop/shop_3.png",
        title: "西虹市首富",
        state: "12.1km",
        loc: "影院：万达国际影城",
        charge: "￥56.0"
      },
      {
        img: "/imgs/shop/shop_4.png",
        title: "西虹市首富",
        state: "9.8km",
        loc: "影院：万达国际影城",
        charge: "￥56.0"
      }

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})