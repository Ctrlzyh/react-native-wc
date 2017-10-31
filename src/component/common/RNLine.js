'use strict';

import React, { PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * @desc 水平线 可用于进度条 也可分割线
 * @author com.ppz.zl
 * @dateTime 2017年06月14日10:12:37
 * 
 * @param {Number} height 
 * @param {String} lineColor 
 * @param {Number} marginRight 
 * @param {Number} marginLeft 
 * @param {String} backgroundColor 
 */
const HorizontalLine = ({...props}) => {
    const {
        height= PPZ.styles.onePx,
        lineColor='#fff',
        marginRight,
        marginLeft,
        backgroundColor='#e6e6e6',
    } = props;

    const container = {
        height,
        marginRight,
        backgroundColor:backgroundColor,
    }
    const lineStyle = {
        width:marginLeft,
        height,
        backgroundColor:lineColor
    }

    return(
        <View style={ container }>
            <View style={ lineStyle }></View>
        </View>
    )
}
export default HorizontalLine;
