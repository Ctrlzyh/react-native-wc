import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    InteractionManager
} from 'react-native';

class RNSplash extends Component {
    uri = 'http://7xvvpv.com1.z0.glb.clouddn.com/splash.png';
    render(){
        console.log('global----->',global.PPZ);
        return(
             <Image 
                resizeMode = 'stretch'
                source = {{ uri: this.uri }}
                style = { styles.container } 
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: global.PPZ.styles.height,
        width: global.PPZ.styles.width,
    },
})


export default RNSplash;


