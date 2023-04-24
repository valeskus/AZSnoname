import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    padding: 20,
  },
  homeScreenGaleryImage: {
    width: 331,
    height: '100%',
    marginRight: 20,
  },
  homeScreenGaleryImageLast: {
    marginRight: 0,
  },
  bannersContainer: {
    width: '100%',
    height: 166,
    marginBottom: 12,
  },
  homeScreenTitle: {
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.04,
    marginBottom: 20,
  },
  homeScreenButton: {
    backgroundColor: 'rgb(255,255,255)',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    borderColor: 'rgb(255,255,255)',
    borderWidth: 1,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {width: 2, height: 2},
    marginBottom: 20,
  },
  buttonIcon: {
    width: 43,
    height: 43,
  },
  screenCardButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardButtonTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonGroupItem: {
    width: '48%',
  },
  screenMap: {
    width: '100%',
  },
});
