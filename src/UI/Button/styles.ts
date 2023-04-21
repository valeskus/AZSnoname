import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0, 180, 136, 1)',
    width: '100%',
    borderRadius: 15,
    borderColor: '#FCFFFE',
    borderWidth: 1,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 0},
  },
  buttonPressed: {
    transform: [{scale: 0.9}],
  },
  buttonTitle: {
    fontSize: 18,
    padding: 18,
    textAlign: 'center',
    color: 'rgb(252, 255, 254)',
    fontFamily: 'Mustica Pro',
    fontStyle: 'normal',
    fontWeight: '600',
  },
});
