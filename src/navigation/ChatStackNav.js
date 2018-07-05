import { StackNavigator } from 'react-navigation';
import DiscussionScreen from '@screens/DiscussionScreen';
import { defaultNavOptions } from '@settings/nav';

const routes = {
  DiscussionScreen: { screen: DiscussionScreen }
};

const config = {
  initialRouteName: 'DiscussionScreen',
  navigationOptions: defaultNavOptions,
};

export default StackNavigator(routes, config);
