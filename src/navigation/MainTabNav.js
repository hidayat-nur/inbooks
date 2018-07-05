import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeStackNav from './HomeStackNav';
import ContentStackNav from './ContentStackNav';
import BorrowStackNav from './BorrowStackNav';
import ProfileStackNav from './ProfileStackNav';
import ChatStackNav from './ChatStackNav';
import theme from '@settings/themes';
import assets from '@assets';

const getActiveRoute = navigationState => navigationState.routes[navigationState.index];

const tabNavOptions = ({ navigation }) => {
  const { routeName } = navigation.state;
  let defaultIcon;
  let activeIcon;
  switch (routeName) {
    case 'HomeStackNav':
      defaultIcon = assets.img.home;
      activeIcon = assets.img.homeActive;
      break;
    case 'ContentStackNav':
      defaultIcon = assets.img.book;
      activeIcon = assets.img.bookActive;
      break;
    case 'BorrowStackNav':
      defaultIcon = assets.img.cart;
      activeIcon = assets.img.cartActive;
      break;
    case 'ChatStackNav':
      defaultIcon = assets.img.chat;
      activeIcon = assets.img.chatActive;
      break;
    case 'ProfileStackNav':
      defaultIcon = assets.img.user;
      activeIcon = assets.img.userActive;
      break;
    default:
      break;
  }

  return {
    title: 'Inbooks',
    tabBarIcon: ({ focused }) => {
      const iconSource = focused ? activeIcon : defaultIcon;
      return <Image source={iconSource} style={{ height: 24, width: 24, resizeMode: 'contain' }} />;
    }
  };
};

const tabRoutes = {
  HomeStackNav: {
    screen: HomeStackNav,
    backgroundColor: theme.colors.dark, // Override tab bg color
    labelColor: theme.colors.dark1, // Override tab label color
    activeTintColor: theme.colors.white, // Override tab active color
    navigationOptions: { header: null }, // Hide header for nested nav
  },
  ContentStackNav: {
    screen: ContentStackNav,
    backgroundColor: theme.colors.dark, // Override tab bg color
    labelColor: theme.colors.dark1, // Override tab label color
    activeTintColor: theme.colors.white, // Override tab active color
    navigationOptions: { header: null }, // Hide header for nested nav
  },
  BorrowStackNav: {
    screen: BorrowStackNav,
    backgroundColor: theme.colors.dark, // Override tab bg color
    labelColor: theme.colors.dark1, // Override tab label color
    activeTintColor: theme.colors.white, // Override tab active color
    navigationOptions: { header: null }, // Hide header for nested nav
  },
  ChatStackNav: {
    screen: ChatStackNav,
    backgroundColor: theme.colors.dark, // Override tab bg color
    labelColor: theme.colors.dark1, // Override tab label color
    activeTintColor: theme.colors.white, // Override tab active color
    navigationOptions: { header: null }, // Hide header for nested nav
  },
  ProfileStackNav: {
    screen: ProfileStackNav,
    backgroundColor: theme.colors.dark, // Override tab bg color
    labelColor: theme.colors.dark1, // Override tab label color
    activeTintColor: theme.colors.white, // Override tab active color
    navigationOptions: { header: null }, // Hide header for nested nav
  },
};

const tabConfig = {
  initialRouteName: 'HomeStackNav',
  // initialRouteName: 'ContentStackNav',
  navigationOptions: tabNavOptions,
  tabBarComponent: (props) => {
    // Change style of tab depending on active route
    const activeRoute = getActiveRoute(props.navigationState);
    const routeSettings = tabRoutes[activeRoute.key];
    // Default active tint color is black
    const activeTintColor = routeSettings.activeTintColor || theme.colors.white;
    return (
      <TabBarBottom
        {...props}
        activeTintColor={activeTintColor}
        style={{ backgroundColor: routeSettings.backgroundColor }}
      />
    );
  },
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: { backgroundColor: theme.colors.dark }, // Default tab bg color
    activeTintColor: theme.colors.gray0, // Default active tint color
    inactiveTintColor: theme.colors.white, // Default inactive tint color
  },
};

export default TabNavigator(tabRoutes, tabConfig);
