import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/Home';

export type StackRegistrationParamList = {
  Main: undefined;
};

const HomeStack = createNativeStackNavigator();

export function StackHome(): JSX.Element {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
