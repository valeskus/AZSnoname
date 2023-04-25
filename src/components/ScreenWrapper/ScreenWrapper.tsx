import React from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {ImageBackground} from 'react-native';
import {ImageConstant} from '../../UI/ImageConstant';
import {styles} from './styles';

interface Props extends React.PropsWithChildren {
  style?: SafeAreaViewProps['style'];
}

export function ScreenWrapper({children, style}: Props): JSX.Element {
  return (
    <ImageBackground
      source={ImageConstant.background}
      style={styles.imageBackground}>
      <SafeAreaView style={style}>{children}</SafeAreaView>
    </ImageBackground>
  );
}
