import {StackNavigator} from 'react-navigation';
import LoginScreen from '@screens/LoginScreen';
import SignupScreen from '@screens/SignupScreen';
import {defaultNavOptions} from '@settings/nav';

const routes = {
    LoginScreen: {screen: LoginScreen},
    SignupScreen: {screen: SignupScreen}
}

const config = {
    initialRouteName: 'LoginScreen',
    navigationOptions: defaultNavOptions
}

export default StackNavigator(routes, config);