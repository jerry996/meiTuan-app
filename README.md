# meiTuan-app
userInfo
wx.login  调用接口wx.login() 获取临时登录凭证（code）
wx.showLoading  显示 loading 提示框
wx.getUserInfo 获取用户信息
wx.hideLoading()  隐藏loading 提示框
wx.setStorage  将数据存储在本地缓存
wx.getStorage  获取数据
wx.showModal  ​显示模态弹窗
wx.navigateTo  保留当前页面，跳转到应用内的某个页面
wxml内图片的src和昵称为data里面设置的初始值，下面block部分用条件渲染wx:if设置是否显示。按钮部分用type设置样式，bindtap绑定函数。
js内设置data内的初始数据，点击按钮登录事件，如果按钮的文字为登录就调用wx.login接口，在成功的回掉函数内显示 wx.showLoading 提示框，wx.getUserInfo成功回调函数内隐藏弹窗，并且设置data值。在本地存储userInfo的数据。并且在onLoad函数内获取本地数据，在刷新的时候不用重复登录。
退出时弹出wx.showModal 具有确认 取消的提示窗，confire为true的时候曲儿是成功的回调函数，设置data值，并且移除缓存数据。

nav导航
通过设置设定事件改变class来改变nav导航底部的样式，并且在data中设置是否显示底部内容区域。

列表渲染
wx:for="{{}}"
wx:for绑定一个数组，可使用数组中各项数据重复渲染该组件
在双大括号内调用item下的data值
