import { Navigation } from 'react-native-navigation';

import Splash from '../containers/Splash.js';

export default function () {
    //1.start
    Navigation.registerComponent('splash', () => Splash );
}


