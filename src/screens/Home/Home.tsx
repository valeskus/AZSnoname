import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ScreenButton} from '../../UI/ScreenButton';
import {ImageConstant} from '../../UI/ImageConstant';
import {Icons} from '../../UI/Icons';

export function Home(): JSX.Element {
  return (
    <View style={styles.homeScreenContainer}>
      <Image
        style={styles.homeScreenGaleryImage}
        source={ImageConstant.homeGalery}
      />
      <Text style={styles.homeScreenTitle}>Слідкуй за знижками</Text>

      <ScreenButton icon={'sale'} text={'Отримати персональну знижку'} />

      <View style={styles.buttonGroup}>
        <View style={styles.buttonGroupItem}>
          <ScreenButton icon={'voucher'} text={'Придбати пальне'} />
        </View>
        <View style={styles.buttonGroupItem}>
          <ScreenButton icon={'voucher'} text={'Ціни на пальне'} />
        </View>
      </View>
      <Text style={styles.homeScreenTitle}>Паливна картка</Text>

      <TouchableOpacity style={styles.homeScreenButton}>
        <View style={styles.screenCardButton}>
          <Image style={styles.buttonIcon} source={Icons.priceCard} />
          <Text style={styles.cardButtonTitle}>1205.80 грн</Text>
        </View>
        <Image source={ImageConstant.productCode} />
      </TouchableOpacity>
      <Text style={styles.homeScreenTitle}>Карта АЗК САН</Text>

      <Image style={styles.screenMap} source={ImageConstant.map} />
    </View>
  );
}
