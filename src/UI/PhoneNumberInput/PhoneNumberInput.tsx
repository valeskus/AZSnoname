import React, {useCallback, useState} from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';

export function PhoneNumberInput(): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState('+38(0');
  //TODO onChacge
  const handleChange = useCallback((value: any) => {
    setPhoneNumber(value);
  }, []);

  return (
    <View style={styles.phoneNumberInputcontainer}>
      <Image source={Icons.flag} style={styles.flagIcon} />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChange={e => handleChange(e)}
        keyboardType="number-pad"
      />
      <Pressable
        onPress={() => {}}
        style={({pressed}) => [
          styles.inputIconContainer,
          pressed && styles.inputIconPress,
        ]}>
        <Image source={Icons.cancel} style={styles.inputIcon} />
      </Pressable>
    </View>
  );
}
