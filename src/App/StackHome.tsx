import React from 'react';
import {Home} from '../screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Menu} from '../screens/Menu';
import {Header} from './components';

const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Menu" component={Menu} />
    </Drawer.Navigator>
  );
}
