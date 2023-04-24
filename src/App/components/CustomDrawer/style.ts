import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  customDrawerContainer: {
    flex: 1,
  },
  bottomItem: {
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  arrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  itemText: {
    fontSize: 18,
    color: 'rgb(252, 255, 254)',
    fontWeight: '600',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 0},
  },
});
