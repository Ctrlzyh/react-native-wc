import React, { Component } from 'react';
import {
    NetInfo,
    AppState
} from 'react-native';

import { Navigation } from 'react-native-navigation';

import registerScreens from '../configs/RNRoutes.js';//注册页面

registerScreens();

console.log('-------**************当前开发环境*****************---->',__DEV__);
if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
} 

const NET_INFO = {
    // 'none':'设备处于离线状态',
    'wifi':'WIFI数据连接',
    'cell':'移动网络数据连接',
    'unknown':'网络异常',
    // 'NONE':'设备处于离线状态',
    'MOBILE': '移动网络数据连接',
    'WIFI': 'WIFI数据连接',
    'UNKNOWN': '未知数据连接',
}

class App{
	constructor() {
        console.log('-----------------------app start-----------------------')
        this.startApps();
        this.listenerGroup();
	}
    //添加app状态
    _handleAppStateChange = appState=>{
        console.log(`app当前激活状态------------->${appState}`);
        global.PPZ.appState = appState;

        if (appState.match(/inactive|background/) && appState === 'active') {
            console.log('App has come to the foreground!')
            global.PPZ.appState = 'active';
            //1.恢复刷新token???

            return;
        }
        global.PPZ.appState = 'exit';
    }
    // //网络刷新
    // _onRefresh = netInfoState =>{
    //     global.PPZ.netInfoState = netInfoState;
    // }
    //网络回调函数
    _handleNetInfoChange = netInfoState=>{
        console.log(`上次网络状态-->(${global.PPZ.netInfoState})/当前网络状态-->(${netInfoState})`);
        if( PPZ.cache.canOpenNetModal && NET_INFO[netInfoState]){
            PPZ.modal.openTrans('RNToast',{tips:NET_INFO[netInfoState]});
        }
        global.PPZ.netInfoState = netInfoState;
    }
    listenerGroup () {
        console.log('---------------启动全局监听---------------')
        AppState.addEventListener('change', this._handleAppStateChange);
        NetInfo.addEventListener('change', this._handleNetInfoChange); 
    }
	startApps() {
        console.log('---------------启动路由---------------')
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'splash', // unique ID registered with Navigation.registerScreen
                navigatorStyle:{
                    navBarHidden:true,
                    statusBarTextColorScheme:'light'
                }
            },
            animationType: 'fade',
        });
	}
}

export default App;