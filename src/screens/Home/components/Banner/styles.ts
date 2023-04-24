import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 18,
    left: 18,
  },
  dot: {
    width: 5.47,
    height: 5.47,

    backgroundColor: 'rgba(48, 48, 48, 0.5)',
    borderRadius: 5.47 / 2,

    marginRight: 7,
  },
  dotActive: {
    backgroundColor: '#303030',
  },
});
