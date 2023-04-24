import * as React from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icons} from '../../../UI/Icons';

export const DrawerScreensHeader: React.FC<DrawerHeaderProps> = props => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        {
          marginTop: top,
        },
      ]}>
      <TouchableOpacity onPress={() => {}} style={styles.headerItem}>
        <Image source={Icons.arrowLeft} style={styles.homeHeaderIcon} />
      </TouchableOpacity>

      <Text style={(styles.headerItem, styles.title)}>
        {props.options.title}
      </Text>

      <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        style={[styles.headerItem, styles.drawerItem]}>
        <Image source={Icons.menu} style={styles.homeHeaderIcon} />
      </TouchableOpacity>
    </View>
  );
};
