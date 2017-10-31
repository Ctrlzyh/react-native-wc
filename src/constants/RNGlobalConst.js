'use strict';

// import DeviceInfo from 'react-native-device-info';
import {  Platform, Dimensions, PixelRatio ,StyleSheet } from 'react-native';


let { width, height } = Dimensions.get('window');

global.PPZ = {}
// global.PPZ.device = {
//     platform : Platform.OS,//设备系统
//     brand : DeviceInfo.getBrand(),//设备品牌
//     emulator : DeviceInfo.isEmulator(),//是否模拟器
//     model : DeviceInfo.getModel(),//设备型号
//     bundleId : DeviceInfo.getBundleId(),//bundleid
//     guid : DeviceInfo.getUniqueID(),//设备id
//     appVersion : DeviceInfo.getVersion(),//当前app版本
//     appVersion2 : DeviceInfo.getReadableVersion(),//这个是全版本？
// };

global.PPZ.styles = {
    backgroundColor : '#f3f3f0',//默认背景
    borderColor : '#dedede',//默认边框颜色
    onePx : StyleSheet.hairlineWidth,//一像素
    width: width,
    height: height,
    pixelRatio: PixelRatio.get(),//设备像素密度比
    // viewHeight: height - (PPZ.device.platform ==='ios' ? 64:56),
    // tabBarHeight: PPZ.device.platform ==='ios' ? 50 : 58,
    // navBarHeight: PPZ.device.platform ==='ios' ? 64:56,
    // statusBarHeight: 20,//状态栏高度
    // statusbar : 20,//状态栏高度 沉浸式
    // navHeight : 45,//导航高度,·
    // tabbarHeight : 48,//底部菜单栏
    // IOSStatusbarColor : 'light-content',//ios状态栏背景色light-content default
    // AndroidStatusbarColor : 'rgba(255, 255, 255, 0)',//android状态栏背景色
    // isTranslucent:true
}

global.PPZ.appState = 'start';//app运行状态
global.PPZ.netInfoState = '';//网络状态
//global.PPZ.UMENG_KEY = (Platform.OS === 'android') ? '5704ba0167e58edb7b00287d' : '5716d173e0f55ac44a0005d4';

global.PPZ.version; //app初始化版本配置
// version数据结构 {
//     moblieHost:''//mobile
//     homeProduct:''//首页数据
//     serverTime:'',//服务器时间
//     homeSlide:'',//首页轮播图,
//     weakpwd:'',//弱密码
// }
global.PPZ.token = {} //token值
global.PPZ.webview = {} //webview
global.PPZ.store = {} //用户信息缓存
global.PPZ.cache = {
    canOpenNetModal:false
}; //缓存 
// cache数据结构 {
//     channel:''//app渠道
//     defaultLoginMobile:''//上次登录账号
//     homeProduct:''//首页数据
//     productIndex:''//产品主页数据
//     serverTime:'',//服务器时间
//     homeSlide:'',//首页轮播图,
//     weakpwd:'',//弱密码
//     canOpenNetModal:false
// }

// /*************** uat 环境地址   ************/
// const HTTP_TYPE = 'https://';
// const HOST = HTTP_TYPE+'auat.paipaizhu.com';
// /*****************************************/

// /*************** sit 环境地址   ************/
// const HOST = 'http://atest.paipaizhu.com';
// /*****************************************/

// /*************** 本地 环境地址   ************/
// const HOST = 'http://127.0.0.1:3700';
// const HOST = 'http://192.168.1.39:3700';
// /*****************************************/

// /*************** zl 环境地址   ************/
// const HOST = 'http://192.168.0.253:3700';
// const HOST = 'http://192.168.31.85:3700';
// /*****************************************/
// global.PPZ.host = HOST;