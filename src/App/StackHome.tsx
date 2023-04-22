import React from 'react';
import {Home} from '../screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Header} from './components';
import {Account} from '../screens/Account';
import {Vouchers} from '../screens/Vouchers';
import {Price} from '../screens/Price';
import {Sales} from '../screens/Sales';
import {Map} from '../screens/Map';

const Drawer = createDrawerNavigator();

export type StackHomeParamList = {
  Головна: undefined;
  'Мій кабінет': {
    'Мої талони': undefined;
  };
  Акції: undefined;
  'Карта АЗК': undefined;
};

export function StackHome(): JSX.Element {
  return (
    <Drawer.Navigator
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
      <Drawer.Screen name="Головна" component={Home} />
      <Drawer.Screen name="Мій кабінет" component={Account} />
      <Drawer.Screen name="Мої талони" component={Vouchers} />
      <Drawer.Screen name="Ціни" component={Price} />
      <Drawer.Screen name="Акції" component={Sales} />
      <Drawer.Screen name="Карта АЗК" component={Map} />
    </Drawer.Navigator>
  );
}
