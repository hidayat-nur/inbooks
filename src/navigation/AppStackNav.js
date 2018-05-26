import {StackNavigator} from 'react-navigation';
import MainTabNav from './MainTabNav';

const routes = {
    MainTabNav: {screen: MainTabNav}
}

const config = {
    initialRouteName: 'MainTabNav'
}

export default StackNavigator(routes, config);