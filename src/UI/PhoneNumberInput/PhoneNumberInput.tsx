import React, {useCallback, useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';
import {useNavigation} from '@react-navigation/native';

export type Props = {
  onChange: (n: string) => void;
  lable: string;
  editable: boolean;
};

export function PhoneNumberInput({
  lable,
  editable,
  onChange,
}: Props): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState('+38(0');
  //TODO onChange
  const navigation = useNavigation();
  const handleChange = useCallback(
    (value: any) => {
      if (!value) {
        return;
      }
      setPhoneNumber(value);
      onChange(value);
    },
    [onChange],
  );

  const removePhoneNumber = useCallback(() => {
    setPhoneNumber('+38(0');
  }, []);

  return (
    <View style={styles.PhoneNumberContainer}>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.phoneNumberInputcontainer}>
        <Image source={Icons.flag} style={styles.flagIcon} />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={handleChange}
          inputMode={'tel'}
          editable={editable}
          selectTextOnFocus={editable}
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
            onPress={() => navigation.navigate('EnterPhone')}
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
