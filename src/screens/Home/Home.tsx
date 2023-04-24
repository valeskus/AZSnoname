import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ScreenButton} from '../../UI/ScreenButton';
import {ImageConstant} from '../../UI/ImageConstant';
import {Icons} from '../../UI/Icons';
import {ScrollView} from 'react-native-gesture-handler';
import {Banner} from './components';

export function Home(): JSX.Element {
  return (
    <ScrollView style={styles.homeScreenContainer}>
      <Banner />
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
    </ScrollView>
  );
}

//TODO screens background. Registr. header
//Move to react FC or ...
