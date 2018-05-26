import { StackNavigator } from 'react-navigation';
import HomeScreen from '@screens/HomeScreen';
import { defaultNavOptions } from '@settings/nav';

const routes = {
  HomeScreen: { screen: HomeScreen }
};

const config = {
  initialRouteName: 'HomeScreen',
  navigationOptions: defaultNavOptions,
};

export default StackNavigator(routes, config);
