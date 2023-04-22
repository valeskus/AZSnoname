import React from 'react';
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

export type Props = {
  title: string;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  isLoading?: boolean;
};

export function Button({
  title,
  isLoading,
  onPress,
  pressableStyle,
  disabled,
}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || isLoading}
      style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed,
        pressableStyle,
        disabled && styles.buttonDisabled,
      ]}>
      {isLoading && (
        <ActivityIndicator color="white" style={styles.loadingIndicator} />
      )}
      {!isLoading && <Text style={styles.buttonTitle}>{title}</Text>}
    </Pressable>
  );
}
