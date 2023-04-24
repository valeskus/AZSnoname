import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import {Icons} from '../../../UI/Icons';
import {styles} from './style';
import {useCustomDriverController} from './hooks';

export function CustomDrawer(props: DrawerContentComponentProps): JSX.Element {
  const {signOut, name, onSignIn} = useCustomDriverController();
  return (
    <View style={styles.customDrawerContainer}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {name && (
        <TouchableOpacity style={styles.bottomItem} onPress={signOut}>
          <Text style={styles.itemText}>Вийти</Text>
          <Image source={Icons.rightArrow} style={styles.arrow} />
        </TouchableOpacity>
      )}
      {!name && (
        <TouchableOpacity style={styles.bottomItem} onPress={onSignIn}>
          <Text style={styles.itemText}>Війти</Text>
          <Image source={Icons.rightArrow} style={styles.arrow} />
        </TouchableOpacity>
      )}
    </View>
  );
}
