import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputsContainer: {
    flex: 2,
    width: '100%',
  },
  dateInputTouch: {
    width: '100%',
    height: 45,
    top: 25,
    zIndex: 10,
    position: 'absolute',
  },
  agreementContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
