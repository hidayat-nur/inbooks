import theme from './themes';

export const defaultNavOptions = {
  headerTitleStyle: {
    color: '#fff',
    fontWeight: 'bold'
  },
  headerStyle: {
    backgroundColor: theme.colors.dark,
    borderBottomWidth: 0,
    elevation: 0,
    shadowColor: 'transparent'
  },
  headerTintColor: '#fff',
  headerBackTitle: null, // Don't show previous screen title on iOS
};
