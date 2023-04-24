import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  homeHeaderItem: {
    flex: 1,
  },
  drawerItem: {
    alignItems: 'flex-end',
  },
  homeHeaderIcon: {
    width: 25,
    height: 25,
  },
  homeHeaderLogoIcon: {
    width: 34,
    height: 46,
    resizeMode: 'contain',
  },
  headerLogoItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    color: '#303030',
  },
});
