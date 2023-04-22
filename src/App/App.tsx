import React from 'react';
import {Platform, UIManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StackRegistration,
  StackRegistrationParamList,
} from './StackRegistration';
import {StackHome, StackHomeParamList} from './StackHome';
import {Provider} from 'react-redux';
import {store} from '../stores/rootStore';

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
    <Provider store={store}>
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
    </Provider>
  );
}
