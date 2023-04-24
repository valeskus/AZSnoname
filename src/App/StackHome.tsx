import React from 'react';
import {StackDrawer} from './StackDrawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export function StackHome(): JSX.Element {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <HomeStack.Screen name="DrawerStack" component={StackDrawer} />
    </HomeStack.Navigator>
  );
}
