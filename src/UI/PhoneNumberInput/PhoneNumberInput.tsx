import React, {useCallback, useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';

export type Props = {
  lable: string;
  icon: keyof typeof Icons;
  editable: boolean;
};

export function PhoneNumberInput({lable, icon, editable}: Props): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState('+38(0');
  //TODO onChange
  const handleChange = useCallback((value: any) => {
    setPhoneNumber(value);
  }, []);

  return (
    <View>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.phoneNumberInputcontainer}>
        <Image source={Icons.flag} style={styles.flagIcon} />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChange={e => handleChange(e)}
          keyboardType="number-pad"
          editable={editable}
          selectTextOnFocus={editable}
        />
        <Pressable
          onPress={() => {}}
          style={({pressed}) => [
            styles.inputIconContainer,
            pressed && styles.inputIconPress,
          ]}>
          <Image source={Icons[icon]} style={styles.inputIcon} />
        </Pressable>
      </View>
    </View>
  );
}
