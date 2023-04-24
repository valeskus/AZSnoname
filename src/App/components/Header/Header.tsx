import * as React from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {styles} from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Header: React.FC<DrawerHeaderProps> = props => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, {marginTop: top}]}>
      <View style={styles.drowerWrap} />
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Text>open</Text>
      </TouchableOpacity>
    </View>
  );
};
