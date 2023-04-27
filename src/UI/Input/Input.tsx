import React from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

export type Props = {
  type?: KeyboardTypeOptions;
  label?: string;
  length?: number;
  invalid?: boolean;
  value?: string;
  editable?: boolean;
  refValue?: any;
  onChange?: (value: string) => void;
  keyPressed?: any;
};

//TOOD types

export function Input({
  type,
  label,
  length,
  invalid,
  value,
  editable,
  onChange,
  refValue,
  keyPressed,
}: Props): JSX.Element {
  const isCodeInput = length === 1 ? true : false;
  console.log(refValue);
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
        onChangeText={onChange}
        value={value}
        editable={editable}
        ref={refValue}
        onKeyPress={keyPressed}
      />
    </View>
  );
}
