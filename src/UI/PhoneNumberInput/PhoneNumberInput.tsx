import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';
import {usePhoneNumberInputController} from './usePhoneNumberInputController';

export type Props = {
  onChange?: (phoneNumber: string, isValid: boolean) => void;
  onEditPress?: () => void;
  label: string;
  editable: boolean;
  initialValue?: string;
  phoneFormat: string;
};

export function PhoneNumberInput({
  label,
  editable,
  initialValue = '',
  onEditPress,
  onChange,
  phoneFormat,
}: Props): JSX.Element {
  const {removePhoneNumber, handleChange, phoneNumber} =
    usePhoneNumberInputController({initialValue, onChange, phoneFormat});

  return (
    <View style={styles.phoneNumberContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.phoneNumberInputcontainer}>
        <Image source={Icons.flag} style={styles.flagIcon} />
        <TextInput
          style={[styles.input, styles.inputText]}
          value={phoneNumber}
          onChangeText={handleChange}
          inputMode={'tel'}
          editable={editable}
        />

        {editable ? (
          <Pressable
            onPress={removePhoneNumber}
            style={({pressed}) => [
              styles.inputIconContainer,
              pressed && styles.inputIconPress,
            ]}>
            <Image source={Icons.cancel} style={styles.inputIcon} />
          </Pressable>
        ) : (
          <Pressable
            onPress={onEditPress}
            style={({pressed}) => [
              styles.inputIconContainer,
              pressed && styles.inputIconPress,
            ]}>
            <Image source={Icons.pencil} style={styles.inputIcon} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
