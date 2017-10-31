'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    InteractionManager
} from 'react-native';

import * as RNModal from './RNModalConfig.js';

/**
 * @desc 模态框组件
 * @author com.ppz.zl
 * @dateTime 2017年06月15日22:14:59
 * @version v1
 * 
 * @param {Object} props
 * @param {String} props.name 模态框名
 * @param {String} props.animationType opt undefined 'fade'  默认 undefined
 */
const Modal = ({...props}) => {
    // console.log('模态框组件props---------->',props);

    const { name } = props;
    const Comp = RNModal[name];

    return(
        <Comp {...props} />
    )
}

export default Modal;