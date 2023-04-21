import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    height: 44,
    borderColor: 'rgb(252, 255, 254)',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#FCFFFE',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 0},

    letterSpacing: 0.04,
    // fontFamily: 'Mustica Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#303030',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  lable: {
    marginBottom: 10,
  },
});
