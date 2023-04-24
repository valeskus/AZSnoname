import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  registrationHeaderContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationHeaderTitle: {
    // fontFamily: 'Intro',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    color: 'rgb(48, 48, 48)',
  },
  logoImage: {
    resizeMode: 'contain',
    width: 90,
  },
});
