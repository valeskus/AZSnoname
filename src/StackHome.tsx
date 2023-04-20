import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Menu} from './screens/Menu';
import {Header} from './App/components';

const Drawer = createDrawerNavigator();

export function StackHome(): JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: Header,
        drawerPosition: 'right',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Menu" component={Menu} />
    </Drawer.Navigator>
  );
}
