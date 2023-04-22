import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';

export type Props = {
  title: string;
  onPress: () => void;
  underline: boolean;
  selectButton: boolean;
};

export function LinkButton({
  title,
  onPress,
  underline,
  selectButton,
}: Props): JSX.Element {
  const [check, setCheck] = useState(false);

  return (
    <View style={[styles.linkButtonContainer, !selectButton && styles.center]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [pressed && styles.buttonPressed]}>
        <View style={underline && styles.underline}>
          <Text style={styles.buttonTitle}>{title}</Text>
        </View>
      </Pressable>
      {selectButton && (
        <Pressable
          onPress={() => setCheck(!check)}
          style={styles.checkContainer}>
          {check && <Image source={Icons.check} style={[styles.checkIcon]} />}
        </Pressable>
      )}
    </View>
  );
}
