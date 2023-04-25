import * as React from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icons} from '../../../UI/Icons';

export const Header = (props: DrawerHeaderProps): JSX.Element => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        {
          marginTop: top,
        },
      ]}>
      <TouchableOpacity onPress={() => {}} style={styles.homeHeaderItem}>
        <Image source={Icons.bell} style={styles.homeHeaderIcon} />
      </TouchableOpacity>

      <View style={[styles.homeHeaderItem, styles.headerLogoItem]}>
        <Image source={Icons.logo} style={styles.homeHeaderLogoIcon} />
        <Text style={styles.logoText}>CAH</Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        style={[styles.homeHeaderItem, styles.drawerItem]}>
        <Image source={Icons.menu} style={styles.homeHeaderIcon} />
      </TouchableOpacity>
    </View>
  );
};
