import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Text, View} from 'react-native';
import {Icons} from '../../../UI/Icons';
import {styles} from './style';

export function CustomDrawer(props: DrawerContentComponentProps): JSX.Element {
  return (
    <View style={styles.customDrawerContainer}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomItem}>
        <Text style={styles.itemText}>Вийти</Text>
        <Image source={Icons.rightArrow} style={styles.arrow} />
      </View>
    </View>
  );
}
