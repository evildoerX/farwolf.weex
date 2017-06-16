# farwolf 的脚手架
## 特色:
1.使用原生路由，官方也是，但是官方有页面转场有白屏现象，预加载技术独此一家，保证切换的时候无白屏现象，本地js有效，网络js无效

2.页面参数传递，页面参数回传，跨页面返回

3.无线通知，原生基于eventbus实现

4.相机拍照，相册选取照片

5.网络访问的简易封装

6.原生代码的static变量接口，比如登录的user对象可以放里面，

7.android端报错会弹出界面提示，官方的是白屏，都不知道发生了啥

8.也继承了二维码扫描，方便调试

9.双击刷新界面，三机弹出调试界面，android端如果底层是scroller，这2个就不能用，暂时没有解决

## 使用方法:

git clone  https://github.com/farwolf2010/farwolf.weex.git

## android:
```android:

必须使用android studio :

open an existing Android studio Porject

选择farwolf.weex/platforms/android/vshop目录

修改：farwolf.weex/platforms/android/vshop/local.properties 里面的 sdk.dir=你自己的android sdk路径

等待下载相应插件

然后菜单：build, make 无报错，run->run app 即可看到效果

双击可以刷新，但是跟布局如果是scoller无效，三击可以打开二维码扫描，可以先把scroller注释掉，调完了再恢复，推荐直接用ios调，ios无此问题，调完了Android做个适配就完了
```

## ios:

```ios:
使用xcode 打开：farwolf.weex/platforms/ios/vshop/vshop.xcworkspace
run
即可看到效果，双击刷新，三击打开二维码扫描


