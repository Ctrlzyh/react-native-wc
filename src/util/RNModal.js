import { Navigation } from 'react-native-navigation'
/**
 * @author com.ppz.zl
 * @dateTime 2017年06月04日15:55:35 
 * @desc 模态框
 * @version v1
 * @class RNModal
 * 
 */
class RNModal {
    /**
     * 
     * @desc 打开透明半透明背景模态框 默认背景黑色半透明
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @static
     * @param {String} name  模态框名/模态框组件 默认 modal
     * @param {*Object} data 可选 如果需要传值 必须是一个对象可以为空对象
     * @param {String} animationType  可选 动画类型// 'none' / 'slide-down' (optional, default 'none')
     * @param {String} title 可选 //navbar名称
     * @use 任意rn模态框 PPZ.modal.open(modalName, data, animationType='none', title)
     * @returns 
     * 
     * @memberof RNModal
     */
    static open(modalName, data={}, animationType='none', title) {
        // console.log('modal.open------------->',name);
        data['name'] = modalName;
        Navigation.showModal({
            screen: 'modal', // unique ID registered with Navigation.registerScreen
            title: title,
            passProps: data,
            animationType: animationType,
            navigatorStyle: {
                backButtonTitle:'',
                navBarHidden: title ? false : true,
                tabBarHidden: true,
                screenBackgroundColor: 'rgba(0,0,0,0.5)',
                modalPresentationStyle: 'overCurrentContext',
                statusBarTextColorScheme:'light',
            },
        })
    } 
    /**
     * 
     * @desc 以模态框形式打开页面
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @static
     * @param {String} name  模态框名/模态框组件 默认 modal
     * @param {*Object} data 可选 如果需要传值 必须是一个对象可以为空对象
     * @param {String} animationType  可选 动画类型// 'none' / 'slide-down' (optional, default 'none')
     * @param {String} title 可选 //navbar名称
     * @use 任意rn模态框 PPZ.modal.open(modalName, data, animationType='none', title)
     * @returns 
     * 
     * @memberof RNModal
     */
    static openPage(modalName, data={}, animationType='none', title) {
        data['animationType'] = animationType;
        // console.log('modal.open------------->',name);
        Navigation.showModal({
            screen: modalName, // unique ID registered with Navigation.registerScreen
            title: title,
            passProps: data,
            animationType: animationType,
            navigatorStyle: {
                backButtonTitle:'',
                navBarHidden: title ? false : true,
                tabBarHidden: true,
            },
        })
    }   
    /**
     * 
     * @desc 打开模态框 背景完全透明
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @static
     * @param {String} name  模态框名/模态框组件 默认 modal
     * @param {*Object} data 可选
     * @param {String} animationType 可选 动画类型// 'none' / 'slide-down' (optional, default 'none')
     * @param {String} title 可选 //navbar名称
     * @use 任意rn模态框 PPZ.modal.openTrans(modalName, data, animationType='none', title)
     * @returns 
     * 
     * @memberof RNModal
     */
    static openTrans(modalName, data={}, animationType='none', title) {
        data['name'] = modalName;

        Navigation.showModal({
            screen: 'modal', // unique ID registered with Navigation.registerScreen
            passProps: data,
            animationType: animationType,
            navigatorStyle: {
                backButtonTitle:'',
                navBarHidden: true,
                tabBarHidden: true,
                screenBackgroundColor: 'transparent',
                modalPresentationStyle: 'overCurrentContext',
                statusBarTextColorScheme:'light',
                // statusBarColor:'#fff',
            },
        })
    }
    /**
     * 
     * @desc 关闭模态框
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @static
     * @param animationType 动画类型// 'none' / 'slide-down' (optional, default 'none')
     * @use  PPZ.modal.close() 
     * @returns 
     * 
     * @memberof RNModal
     */
    static close( animationType='none',delay=0 ) {
        return new Promise((resolve, reject)=>{
            Navigation.dismissModal({
                animationType: animationType
            })
            setTimeout(()=>resolve(),delay);
        });
    }
     /**
     * 
     * @desc 关闭多个模态框
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @static
     * @param {*Array } animationType 动画数组 // 'none' / 'slide-down' (optional, default 'none')
     * @use  PPZ.modal.closeAll(animationType) 
     * @returns 
     * 
     * @memberof RNModal
     */
    static closeAll( animationType,delay=1000) {
        animationType.map( (item, index)=>{
            if(index !== 0){
                setTimeout(()=>{
                    Navigation.dismissModal({animationType: item})
                },delay);
                return;
            }
            Navigation.dismissModal({animationType: item})
        });
    }
    // /**
    //  * 
    //  * @desc 关闭所有模态框 //这里有一个bug不能关闭所有
    //  * @author com.ppz.zl
    //  * @dateTime 2017年06月04日15:55:35 
    //  * @static
    //  * @param animationType 动画类型// 'none' / 'slide-down' (optional, default 'none')
    //  * @use  PPZ.modal.closeAll 
    //  * @returns 
    //  * 
    //  * @memberof RNModal
    //  */
    // static closeAll( animationType='none' ) {
    //     Navigation.dismissAllModals({
    //         animationType: animationType
    //     })
    // }
    /**
     * 
     * @desc 打开背景模态框 背景全透明
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @static
     * @use  PPZ.modal.showLightBox 
     * @param {String} mdoalName 模态框名
     * @param {Object} data 传递参数
     * 
     * @returns 
     * 
     * @memberof RNModal
     */
    static showModal(mdoalName, data={}) {
        data['name'] = mdoalName;
        Navigation.showLightBox({
            screen: 'modal', 
            passProps: data,
            style: {
                backgroundBlur: 'none', // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
                flex: 1,
            }
        })
    }
    /**
     * 
     * @desc 打开背景透明模态框 背景半透明
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @static
     * @use  PPZ.modal.showLightBox 
     * @param {String} mdoalName 模态框名
     * @param {Object} data 传递参数
     * 
     * @returns 
     * 
     * @memberof RNModal
     */
    static showTransModal(mdoalName, data={}) {
        data['name'] = mdoalName;
        Navigation.showLightBox({
            screen: 'modal', 
            passProps: data,
            style: {
                backgroundColor: "rgba(0,0,0,0.5)",
                flex: 1,
            }
        })
    }
    /**
     * 
     * @desc 关闭LightBox
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @static
     * @use  PPZ.modal.dismissLightBox 
     * @returns 
     * 
     * @memberof RNModal
     */
    static closeModal() {
        Navigation.dismissLightBox()
    }
}
global.PPZ.modal = RNModal;
