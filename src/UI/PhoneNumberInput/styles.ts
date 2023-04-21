import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  phoneNumberInputcontainer: {
    width: 311,
    height: 44,
    borderColor: 'rgb(252, 255, 254)',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#FCFFFE',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {width: 1, height: 1},
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    letterSpacing: 0.04,
    // fontFamily: 'Mustica Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#303030',
  },
  inputIcon: {
    width: 10,
    height: 10,
  },
  flagIcon: {
    width: 27,
    height: 27,
    marginHorizontal: 3,
  },
  inputIconContainer: {
    backgroundColor: 'rgba(0, 180, 136, 1)',
    borderRadius: 50,
    padding: 5,
    margin: 3,
  },
  inputIconPress: {
    transform: [{scale: 0.9}],
  },
});
