import React from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';
import {styles} from './styles';

export type Props = {
  placeholder?: string;
  type?: KeyboardTypeOptions | undefined;
};

export function Input({placeholder, type}: Props): JSX.Element {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={type}
    />
  );
}
