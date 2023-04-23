import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 25,
  },
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
});
