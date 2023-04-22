import React, {useCallback, useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';

export type Props = {
  onChange?: (phoneNumber: string, isValid: boolean) => void;
  onEditPress?: () => void;
  label: string;
  editable: boolean;
  initialValue?: string;
};

export function PhoneNumberInput({
  label,
  editable,
  initialValue = '',
  onEditPress,
  onChange,
}: Props): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState(initialValue);

  const handleChange = useCallback(
    (value: string) => {
      const rawValue = value.trim().replace(/\D/g, '');

      console.log('rawValue', rawValue);

      setPhoneNumber(rawValue);
      onChange?.(value, value.length === 9);
    },
    [onChange],
  );

  const removePhoneNumber = useCallback(() => {
    setPhoneNumber('');
  }, []);

  // TODO LABEL
  return (
    <View style={styles.phoneNumberContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.phoneNumberInputcontainer}>
        <Image source={Icons.flag} style={styles.flagIcon} />
        <Text style={styles.inputText}>+38(0</Text>
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
