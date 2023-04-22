import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EnterPhone} from '../screens/RegistrationsScreens/EnterPhone';
import {EnterCode} from '../screens/RegistrationsScreens/EnterCode';
import {EnterUserName} from '../screens/RegistrationsScreens/EnterUserName';
import {EnterUserBirthday} from '../screens/RegistrationsScreens/EnterUserBirthday';

export type StackRegistrationParamList = {
  EnterPhone: undefined;
  EnterCode: {
    phoneNumber: string;
  };
  EnterUserName: undefined;
  EnterUserBirthday: undefined;
};

const RegistrationStack = createNativeStackNavigator();

export function StackRegistration(): JSX.Element {
  return (
    <RegistrationStack.Navigator screenOptions={{headerTitle: ''}}>
      <RegistrationStack.Screen name="EnterPhone" component={EnterPhone} />
      <RegistrationStack.Screen name="EnterCode" component={EnterCode} />
      <RegistrationStack.Screen
        name="EnterUserName"
        component={EnterUserName}
      />
      <RegistrationStack.Screen
        name="EnterUserBirthday"
        component={EnterUserBirthday}
      />
    </RegistrationStack.Navigator>
  );
}
