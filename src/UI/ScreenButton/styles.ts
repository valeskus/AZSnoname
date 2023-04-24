import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenButtonTitle: {
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.04,
    flexShrink: 1,
  },
  screenButton: {
    backgroundColor: 'rgb(255,255,255)',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
    padding: 10,
    borderColor: 'rgb(255,255,255)',
    borderWidth: 1,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {width: 2, height: 2},
  },
  buttonIcon: {
    width: 43,
    height: 43,
  },
  buttonCode: {
    flex: 1,
  },
});
