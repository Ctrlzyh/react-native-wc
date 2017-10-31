'use strict';
import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
/**
 * @desc loading加载器
 * @Author com.ppz.zl
 * @date 2017年01月17日11:46:46
 * @version v1
 * @Name RNToast
 */
const RNToast = ({ ...props }) =>{
    // console.log('toast-------->',props);
    const { tips, delay=1000,cb } = props;

    setTimeout(()=>{
        PPZ.modal.close();
        cb && cb();
    }, delay);

    return(
        <View style = { styles.container }>
            <View style = { styles.box }>
                <Text style={ styles.tips }>{tips}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    box:{
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:5,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    tips:{
        textAlign:'center',
        color:'#fff'
    }
    
})
export default RNToast;