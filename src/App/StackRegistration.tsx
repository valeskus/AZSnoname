import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Registration} from './screens/Registration';

export type StackRegistrationParamList = {
  Main: undefined;
};

const RegistrationStack = createNativeStackNavigator();

export function StackRegistration(): JSX.Element {
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen name="Registration" component={Registration} />
    </RegistrationStack.Navigator>
  );
}
