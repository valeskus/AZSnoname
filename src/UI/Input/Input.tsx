import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import {styles} from './styles';

export type Props = {
  type?: KeyboardTypeOptions;
  label?: string;
  length?: number;
  invalid?: boolean;
  value?: string;
  refValue?: any;
  isSelectTextOnFocus?: boolean;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onKeyPressed?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
};

//TOOD types

export function Input({
  type,
  label,
  length,
  invalid,
  value,
  onChange,
  refValue,
  isSelectTextOnFocus,
  onKeyPressed,
}: Props): JSX.Element {
  const isCodeInput = length === 1 ? true : false;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isCodeInput && styles.center,
          invalid && styles.invalid,
        ]}
        keyboardType={type}
        maxLength={length}
        onChange={onChange}
        value={value}
        ref={refValue}
        selectTextOnFocus={isSelectTextOnFocus}
        onKeyPress={onKeyPressed}
      />
    </View>
  );
}
