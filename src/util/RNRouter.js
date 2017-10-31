/**
 * @author com.ppz.zl
 * @dateTime 2017年06月04日15:55:35 
 * @desc 路由
 * @version v1
 * @class RNRouter
 * 
 */
class RNRouter {
    /**
     * 
     * @author com.ppz.zl
     * @dateTime 2017年06月04日15:55:35 
     * @desc 路由跳转
     * @static
     * @param {String} route 目标路由名
     * @param {String} title: undefined, // navigation bar title of the pushed screen (optional) 页面title
     * @param {String} animationType: 'fade', 'slide-horizontal' 转场动画
     * @param {Object} style 目标路由样式 
     * opt{
     *      screen: 'example.ScreenThree', // unique ID registered with Navigation.registerScreen
     *      titleImage: require('../../img/my_image.png'), //navigation bar title image instead of the title text of the pushed screen (optional)
     *      animated: true, // does the push have transition animation or does it happen immediately (optional)
     *      animationType: 'fade', 'slide-horizontal' // does the push have fade transition animation, iOS only (optional)
     *      backButtonTitle: undefined, // override the back button title (optional)
     *      backButtonHidden: false, // hide the back button altogether (optional)
     *      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
     *      navigatorStyle: {}, // 下方详细配置
     *      navigatorButtons: {} // 下方详细配置
     * }
     * @param {Object} params 参数?
     * @param {Object} that this
     * @use 任意rn页面 PPZ.router.open
     * @returns 
     * 
     * @memberof RNRouter
     */
    static open(route, title ,animationType='slide-horizontal' ,params) {
        return function(that) {
            const { props } = that;
            const { navigator } = props;
            navigator.push({
                screen: route, // unique ID registered with Navigation.registerScreen
                title,
                animationType,
                backButtonTitle:'',
                passProps: params
            })
        }
    }
    /**
     * @desc 路由返回
     * 
     * @static
     * @param {Boolean} animated  
     * @param {any} animationType 'fade' (for both) / 'slide-horizontal'
     * @returns 
     * @memberof RNRouter
     */
    static back(animationType='fade', animated=true) {
       return function(that) {
            const { props } = that;
            const { navigator } = props;
            navigator.pop({
                animated: animated,
                animationType: animationType,
            })
        }
    }
    /**
     * @desc 返回当前页面根路由
     * 
     * @static
     * @param {boolean} [animated=true] 
     * @returns 
     * 
     * @memberof RNRouter
     */
    static popToRoot(animated=true ) {
        return function(that) {
            const { props } = that;
            const { navigator } = props;
            navigator.popToRoot({
                animated: animated
            })
        }
    } 
    /**
     * @desc 重置路由
     * 
     * @static
     * @param {any} route 
     * @param {any} style 
     * @param {any} params 
     * @returns 
     * 
     * @memberof RNRouter
     */
    static resetTo(route, style ,params) {
        return function(that) {
            const { props } = that;
            const { navigator } = props;
            navigator.resetTo({
                screen: route, 
                ...style
            })
        }
    }
    /**
     * @desc 跳转至某tab
     * 
     * @static
     * @param {any} tabIndex 
     * @returns 
     * @memberof RNRouter
     */
    static switchToTab(tabIndex){
        return function(that) {
            const { props } = that;
            const { navigator } = props;
            navigator.switchToTab({
                tabIndex
            })
        }
    }
}
global.PPZ.router = RNRouter;

/**
 * https://wix.github.io/react-native-navigation/#/styling-the-navigator
 * 
1.1 navigatorStyle 
navigatorStyle:{
  // Common
  navBarTextColor: '#000000', // change the text color of the title (remembered across pushes)
  navBarBackgroundColor: '#f7f7f7', // change the background color of the nav bar (remembered across pushes)
  navBarButtonColor: '#007aff', // Change color of nav bar buttons (eg. the back button) (remembered across pushes)

  navBarTextFontFamily: 'font-name', // Changes the title font

  navBarHidden: false, // make the nav bar hidden
  navBarHideOnScroll: false, // make the nav bar hidden only after the user starts to scroll
  navBarTranslucent: false, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
  navBarTransparent: false, // make the nav bar transparent, works best with drawUnderNavBar:true,
  navBarNoBorder: false, // hide the navigation bar bottom border (hair line). Default false
  drawUnderNavBar: false, // draw the screen content under the nav bar, works best with navBarTranslucent:true
  drawUnderTabBar: false, // draw the screen content under the tab bar (the tab bar is always translucent)
  statusBarBlur: false, // blur the area under the status bar, works best with navBarHidden:true
  navBarBlur: false, // blur the entire nav bar, works best with drawUnderNavBar:true
  tabBarHidden: false, // make the screen content hide the tab bar (remembered across pushes)
  statusBarTextColorScheme: 'dark', // text color of status bar, 'dark' / 'light' (remembered across pushes)
  statusBarTextColorSchemeSingleScreen: 'light' // same as statusBarTextColorScheme but does NOT remember across pushes
  navBarSubtitleColor: 'red', // subtitle color
  screenBackgroundColor: 'white', // Default screen color, visible before the actual react view is rendered
  orientation: 'portrait' // Sets a specific orientation to a modal and all screens pushed to it. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'

  // iOS only
  statusBarHideWithNavBar: false, // hide the status bar if the nav bar is also hidden, useful for navBarHidden:true
  statusBarHidden: false, // make the status bar hidden regardless of nav bar state

  disabledBackGesture: false, // default: false. Disable the back gesture (swipe gesture) in order to pop the top screen. 
  screenBackgroundImageName: '<name of image in Images.xcassets>', // Optional. default screen background image.

  navBarButtonFontSize: 20, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
  navBarButtonFontWeight: '500', // Change font weight nav bar buttons (eg. the back button) (remembered across pushes)

  navBarLeftButtonFontSize: 17, // Change font size of left nav bar button
  navBarLeftButtonColor: 'red', // Change color of left nav bar button
  navBarLeftButtonFontWeight: '400', // Change font weight of left nav bar button

  navBarRightButtonFontSize: 17, // Change font size of right nav bar button
  navBarRightButtonColor: 'blue', // Change color of right nav bar button
  navBarRightButtonFontWeight: '600', // Change font weight of right nav bar button

  // Android only
  navigationBarColor: '#000000', // change the background color of the bottom native navigation bar.
  navBarTitleTextCentered: true, // default: false. centers the title.
  topBarElevationShadowEnabled: false, // default: true. Disables TopBar elevation shadow on Lolipop and above
  statusBarColor: '#000000', // change the color of the status bar.
  collapsingToolBarImage: "http://lorempixel.com/400/200/", // Collapsing Toolbar image.
  collapsingToolBarImage: require('../../img/topbar.jpg'), // Collapsing Toolbar image. Either use a url or require a local image.
  collapsingToolBarCollapsedColor: '#0f2362', // Collapsing Toolbar scrim color.
}
1.2 navigatorButtons
  rightButtons: [{ // buttons for the right side of the nav bar (optional)
    title: 'Edit', // if you want a textual button
    icon: require('../../img/navicon_edit.png'), // if you want an image button
    id: 'compose', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
    testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
    disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
    disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
    buttonColor: 'blue', // Set color for the button (can also be used in setButtons function to set different button style programatically)
    buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
    buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
  }],
  leftButtons: [] // buttons for the left side of the nav bar (optional)
 * 
 */