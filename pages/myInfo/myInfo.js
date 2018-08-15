// pages/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      nickName: '请登录',
      img:"/imgs/tabBar/mine_2.png"
    },
    msg:"登录",
    btnType: 'primary',
    isShow: false
  },
  login:function() {
    if(this.data.msg == "登录") {
      wx.login({
        success:(res) => {
          wx.showLoading({
            title: '正在登录',
          })
          wx.getUserInfo({
            success:(res) => {
              wx.hideLoading();
              // console.log(res)
              this.setData({
                userInfo: {
                  nickName: res.userInfo.nickName,
                  img: res.userInfo.avatarUrl
                },
                msg: "退出",
                btnType: 'warn',
                isShow: true
              })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    nickName: res.userInfo.nickName,
                    img: res.userInfo.avatarUrl
                  },
                  msg: "退出",
                  btnType: 'warn',
                  isShow: true
                }
              })
            }
          })
        },
      })
    }else{
      wx.showModal({
        title: '提醒',
        content: '你确定要退出',
        success: (res) => {
          //confirm为true表明用户点击了按钮
          if(res.confirm) {
            console.log(res)
            this.setData({
              userInfo: {
                nickName: '请登录',
                img: "/imgs/tabBar/mine_2.png"
              },
              msg: "登录",
              btnType: 'primary',
              isShow: false
            })
            wx.removeStorage({
              key: 'userInfo',
            })
          }
          
        }
      })
      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success:(res) => {
        console.log(res)
        this.setData({
          userInfo: {
            nickName: res.data.userInfo.nickName,
            img: res.data.userInfo.img
          },
          msg: res.data.msg,
          btnType: res.data.btnType,
          isShow: res.data.isShow
        })
      },
    })
    
  },
  myOrder:function () {
    wx.navigateTo({
      url: '../myOrder/myOrder',
    })
  },
  myWallet:function () {
    wx.navigateTo({
      url: '../myWallet/myWallet',
    })
  },
  myCollection:function () {
    wx.navigateTo({
      url: '../myCollection/myCollection',
    })
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