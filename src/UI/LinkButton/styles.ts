import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  linkButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
  },
  linkButton: {
    marginBottom: 30,
  },
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
    flex: 2,
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
  checkContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 8,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
  },
});
