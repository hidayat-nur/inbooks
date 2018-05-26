import { StackNavigator } from 'react-navigation';
import ProfileScreen from '@screens/ProfileScreen';
import { defaultNavOptions } from '@settings/nav';

const routes = {
  ProfileScreen: { screen: ProfileScreen }
};

const config = {
  initialRouteName: 'ProfileScreen',
  navigationOptions: defaultNavOptions,
};

export default StackNavigator(routes, config);
