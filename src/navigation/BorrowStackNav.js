import { StackNavigator } from 'react-navigation';
import BorrowScreen from '@screens/BorrowScreen';
import PdfScreen from '@screens/PdfScreen';
import DiscussionScreen from '@screens/DiscussionScreen';
import { defaultNavOptions } from '@settings/nav';

const routes = {
  BorrowScreen: { screen: BorrowScreen },
  PdfScreen: { screen: PdfScreen },
  DiscussionScreen: { screen: DiscussionScreen }
};

const config = {
  initialRouteName: 'BorrowScreen',
  navigationOptions: defaultNavOptions,
};

export default StackNavigator(routes, config);
