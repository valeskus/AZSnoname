import {StyleSheet} from 'react-native';

const REGISTRATION_HEADER_HEIGHT = 250;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: REGISTRATION_HEADER_HEIGHT,
  },
  registrationHeaderContainer: {
    width: '100%',
    height: REGISTRATION_HEADER_HEIGHT,
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationHeaderTitle: {
    fontWeight: '400',
    fontSize: 16,
    color: 'rgb(48, 48, 48)',
  },
  logoImage: {
    resizeMode: 'contain',
    width: 90,
  },
  headerItem: {
    position: 'absolute',
    left: 20,
    zIndex: 10,
  },
  homeHeaderIcon: {
    width: 25,
    height: 25,
  },
});
