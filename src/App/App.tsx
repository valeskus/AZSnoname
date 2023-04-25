import React from 'react';
import {Platform, UIManager} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StackRegistration,
  StackRegistrationParamList,
} from './StackRegistration';
import {StackHome} from './StackHome';
import {Provider} from 'react-redux';
import {store} from '../stores/rootStore';
import {StackDrawerParamList} from './StackDrawer';
import {styles} from './styles';
import {ScreenWrapper} from '../components';

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
    interface RootParamList extends StackDrawerParamList {}
  }
}
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ScreenWrapper style={styles.screenWrapper}>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="StackHome"
              component={StackHome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="StackRegistration"
              component={StackRegistration}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ScreenWrapper>
    </Provider>
  );
}
