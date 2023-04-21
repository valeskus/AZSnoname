import React from 'react';
import {Pressable, StyleProp, ViewStyle, Text} from 'react-native';
import {styles} from './styles';

export type Props = {
  title: string;
  onPress: () => {};
  pressableStyle?: StyleProp<ViewStyle>;
};

export function Button({title, onPress, pressableStyle}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed,
        pressableStyle,
      ]}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
}
