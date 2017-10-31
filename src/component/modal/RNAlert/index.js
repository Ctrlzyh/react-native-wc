'use strict';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import HorizontalLine from '../../common/RNLine.js';

/**
 * @desc 弹出框模态框
 * @param data obj 
 * @例子 
 * let data = {
 *      tips:'您的账户尚未绑定银行卡',
 *      buttons:[
 *          { title:'添加',cb:that._onOpenJxBankCard },
 *          { title:'取消',cb:PPZ.modal.close },
 *      ] 
 * }
 * 1：PPZ.modal.open('RNAlert',data,'动画none/slide-up/slide-down')
 * 2：PPZ.modal.openTrans('RNAlert',data,'动画none/slide-up/slide-down')
 * 
 */
const AlertModal = ({...props}) => {
    const _onPress = async () => {
        await PPZ.modal.close();
    }
    
    const { buttons, component } = props;

    const line = ( (PPZ.styles.width*3/4) /2  )* 3/4;

    if(!buttons){
        return(
            <TouchableOpacity 
                onPress = { _onPress }
                activeOpacity = {1}
                style = { styles.container }>
                <View style = { styles.box }>
                    {/*模态框title*/}
                    <View style = { styles.titleContainer }>
                        <Text style = { styles.title }>{ props.title || '提示'}</Text>
                    </View>
                    <HorizontalLine 
                        marginLeft={line}                            
                        marginRight={line}                            
                    />
                    {/*模态框内容*/}
                    {
                        component ? 
                        component :
                        <View style = { styles.contentContainer }>
                            <Text style = { styles.tips }>{ props && props.tips }</Text>
                        </View>
                    }
                    {/*模态框按钮*/}
                    <View style = { styles.btnContainer} >
                        <View  style = { styles.btn }>
                            <Text style = { styles.btnFont }>确定</Text>
                        </View>    
                    </View>
                </View>               
            </TouchableOpacity>
        )
    }

    return(
        <View style = { styles.container }>
            <TouchableOpacity  
                activeOpacity = {1}
                style = { styles.box }>
                {/*模态框title*/}
                <View style = { styles.titleContainer }>
                    <Text style = { styles.title }>{ props.title || '提示'}</Text>
                </View>
                <HorizontalLine 
                    marginLeft={line}                            
                    marginRight={line}                            
                />
                {/*模态框内容*/}
                {
                    component ? 
                    component :
                    <View style = { styles.contentContainer }>
                        <Text style = { styles.tips }>{ props.tips||'' }</Text>
                    </View>
                }
                {/*模态框按钮*/}
                <View style = { styles.btnContainer} >
                    {
                        props.buttons.map((it,i)=>
                            <TouchableOpacity 
                                key = { 'alert_' + i }
                                onPress = { it.cb }
                                style = { [
                                    styles.btn,
                                    {
                                        borderRightWidth:props.buttons === (i+1) ? 0:StyleSheet.hairlineWidth,
                                    }
                                ] }>
                                <Text style = { styles.btnFont }>{it.title}</Text>
                            </TouchableOpacity>    
                        )
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        backgroundColor: '#fff',
        width: PPZ.styles.width*3/4,
        // height: 0.68*(PPZ.device.width - 60) ,
        borderRadius: 10,
        marginHorizontal: 20,
        overflow: 'hidden'
    },
    titleContainer:{
        paddingTop: 15,
        marginBottom:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#faaf45'
    },
    contentContainer:{
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tips:{
        color:'#999',
        fontSize:16
    },
    btnContainer:{
        paddingVertical:15,
        flexDirection:'row',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:'#dedede',
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#dedede',
    },
    btnFont:{
        color:'#faaf45'
    },
})

export default AlertModal;