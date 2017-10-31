'use strict';

import React ,{ PropTypes }from 'react';

import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';


const RNLoading = ({ ...props })=>{
    const {  
        color='#fff',
        size
    } = props; 

    return(
        <View style = { styles.container }>
            <View style = { styles.box }>
                <ActivityIndicator 
                    color = { color }
                    size = { size }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    box:{
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:5,
        backgroundColor:'rgba(0,0,0,0.5)',
    }
})

export default RNLoading;