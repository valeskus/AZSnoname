import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Header} from './components/Header';
import {Account} from '../screens/Account';
import {Vouchers} from '../screens/Vouchers';
import {Price} from '../screens/Price';
import {Sales} from '../screens/Sales';
import {Map} from '../screens/Map';
import {Image, StyleSheet} from 'react-native';
import {Icons} from '../UI/Icons';
import {CustomDrawer} from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

export type StackHomeParamList = {
  Головна: undefined;
  'Мій кабінет': {
    'Мої талони': undefined;
  };
  Акції: undefined;
  'Карта АЗК': undefined;
};

const getIcon = (icon: keyof typeof Icons) => () => {
  return <Image source={Icons[icon]} style={styles.icon} />;
};

export function StackHome(): JSX.Element {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        header: Header,
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: 'rgb(0, 180, 136)',
        },
        drawerLabelStyle: {
          fontSize: 18,
          color: 'rgb(252, 255, 254)',
          shadowColor: 'rgb(0, 0, 0)',
          shadowOpacity: 0.05,
          shadowRadius: 2,
          shadowOffset: {width: 0, height: 0},
        },
      }}>
      <Drawer.Screen
        name="Мій кабінет"
        component={Account}
        options={{
          drawerIcon: getIcon('account'),
        }}
      />
      <Drawer.Screen
        name="Мої талони"
        component={Vouchers}
        options={{
          drawerIcon: getIcon('voucher'),
        }}
      />
      <Drawer.Screen
        name="Ціни"
        component={Price}
        options={{
          drawerIcon: getIcon('price'),
        }}
      />
      <Drawer.Screen
        name="Акції"
        component={Sales}
        options={{
          drawerIcon: getIcon('sale'),
        }}
      />
      <Drawer.Screen
        name="Карта АЗК"
        component={Map}
        options={{
          drawerIcon: getIcon('map'),
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 40,
    resizeMode: 'contain',
    height: 40,
  },
});
