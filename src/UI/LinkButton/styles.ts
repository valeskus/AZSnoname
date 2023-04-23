import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonPressed: {
    transform: [{scale: 0.9}],
  },

  buttonTitle: {
    fontSize: 12,
    color: 'rgb(48, 48, 48)',
    // fontFamily: 'Mustica Pro',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  underline: {
    paddingVertical: 5,
    borderBottomColor: 'rgb(48, 48, 48)',
    borderBottomWidth: 1,
  },
});
