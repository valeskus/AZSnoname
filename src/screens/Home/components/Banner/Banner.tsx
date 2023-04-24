import * as React from 'react';
import {Image, ScrollView, ScrollViewProps, View} from 'react-native';
import {ImageConstant} from '../../../../UI/ImageConstant';
import {styles} from './styles';

const banners = [
  ImageConstant.homeGalery,
  ImageConstant.homeGalery,
  ImageConstant.homeGalery,
  ImageConstant.homeGalery,
  ImageConstant.homeGalery,
];

export const Banner: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const handleScroll: ScrollViewProps['onScroll'] = ({nativeEvent}) => {
    const slide = Math.round(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setActiveItem(slide);
  };

  return (
    <View style={styles.bannersContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onScroll={handleScroll}>
        {banners.map((item, index) => {
          return (
            <Image
              style={[
                styles.homeScreenGaleryImage,
                index === banners.length && styles.homeScreenGaleryImageLast,
              ]}
              source={item}
              key={index}
            />
          );
        })}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {banners.map((_, index) => (
          <View
            style={[styles.dot, activeItem === index && styles.dotActive]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};
