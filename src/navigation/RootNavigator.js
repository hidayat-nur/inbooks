import {SwitchNavigator} from 'react-navigation';
import AuthStackNav from './AuthStackNav';
import AppStackNav from './AppStackNav';

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator({
        AuthStackNav: {screen: AuthStackNav},
        AppStackNav: {screen: AppStackNav}
    },{
        initialRouteName: signedIn ? "AppStackNav" : "AuthStackNav"
        // initialRouteName: signedIn ? "AppStackNav" : "AppStackNav"
    })
}