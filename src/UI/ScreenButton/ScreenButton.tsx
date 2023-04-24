import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';

export type Props = {
  icon: keyof typeof Icons;
  text: string;
};

export function ScreenButton({icon, text}: Props): JSX.Element {
  return (
    <TouchableOpacity style={styles.screenButton}>
      <Image style={styles.buttonIcon} source={Icons[icon]} />
      <Text style={styles.screenButtonTitle}>{text}</Text>
    </TouchableOpacity>
  );
}
