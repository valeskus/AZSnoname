import React from 'react';
import {
  DrawerHeaderProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Header} from './components/Header';
import {Account} from '../screens/Account';
import {Vouchers} from '../screens/Vouchers';
import {Price} from '../screens/Price';
import {Sales} from '../screens/Sales';
import {Map} from '../screens/Map';
import {Image, StyleSheet} from 'react-native';
import {Icons} from '../UI/Icons';
import {CustomDrawer} from './components/CustomDrawer';
import {Home} from '../screens/Home';
import {DrawerScreensHeader} from './components/DrawerScreensHeader';

const Drawer = createDrawerNavigator();

export type StackDrawerParamList = {
  Home: undefined;
  Account: undefined;
  Vouchers: undefined;
  Sale: undefined;
  Map: undefined;
};

const getIcon = (icon: keyof typeof Icons) => () => {
  return <Image source={Icons[icon]} style={styles.icon} />;
};

const renderHeader = (props: DrawerHeaderProps) => (
  <DrawerScreensHeader {...props} />
);

export function StackDrawer(): JSX.Element {
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
        name="HomeScreen"
        component={Home}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerIcon: getIcon('account'),
          title: 'Мій кабінет',
          header: renderHeader,
        }}
      />
      <Drawer.Screen
        name="Vouchers"
        component={Vouchers}
        options={{
          drawerIcon: getIcon('voucher'),
          title: 'Мої талони',
          header: renderHeader,
        }}
      />
      <Drawer.Screen
        name="Price"
        component={Price}
        options={{
          drawerIcon: getIcon('price'),
          title: 'Ціни',
          header: renderHeader,
        }}
      />
      <Drawer.Screen
        name="Sales"
        component={Sales}
        options={{
          drawerIcon: getIcon('sale'),
          title: 'Акції',
          header: renderHeader,
        }}
      />
      <Drawer.Screen
        name="Map"
        component={Map}
        options={{
          drawerIcon: getIcon('map'),
          title: 'Карта АЗК',
          header: renderHeader,
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
