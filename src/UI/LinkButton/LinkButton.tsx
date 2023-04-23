import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

export type Props = {
  title: string;
  onPress: () => void;
  underline: boolean;
};

export function LinkButton({title, onPress, underline}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed && styles.buttonPressed]}>
      <View style={underline && styles.underline}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </Pressable>
  );
}
