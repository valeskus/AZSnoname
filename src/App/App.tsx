import React from 'react';
import {Platform, UIManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StackRegistration,
  StackRegistrationParamList,
} from './StackRegistration';
import {StackHome, StackHomeParamList} from './StackHome';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type RootStackParamList = {
  StackHome: undefined;
  StackRegistration: undefined;
};

//TODO stacks param list
const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends StackRegistrationParamList {}
    interface RootParamList extends StackHomeParamList {}
  }
}

export function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StackRegistration"
          component={StackRegistration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StackHome"
          component={StackHome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
