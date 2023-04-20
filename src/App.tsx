import React from 'react';
import {Platform, UIManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackRegistration} from './StackRegistration';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type RootStackParamList = {
  Main: undefined;
};

const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Main" component={Main} /> */}
        <Stack.Screen name="StackRegistration" component={StackRegistration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
