import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';

export function RegistrationHeader(): JSX.Element {
  //TODO add image for header
  return (
    <View style={styles.registrationHeaderContainer}>
      <Image source={Icons.logo} style={styles.logoImage} />

      <Text style={styles.registrationHeaderTitle}>ПРОЦЕС РЕЕСТРАЦІЇ</Text>
    </View>
  );
}
