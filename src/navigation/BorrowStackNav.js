import { StackNavigator } from 'react-navigation';
import BorrowScreen from '@screens/BorrowScreen';
import PdfScreen from '@screens/PdfScreen';
import { defaultNavOptions } from '@settings/nav';

const routes = {
  BorrowScreen: { screen: BorrowScreen },
  PdfScreen: { screen: PdfScreen }
};

const config = {
  initialRouteName: 'BorrowScreen',
  navigationOptions: defaultNavOptions,
};

export default StackNavigator(routes, config);
