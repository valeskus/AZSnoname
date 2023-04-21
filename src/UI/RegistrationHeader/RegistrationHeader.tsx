import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export function RegistrationHeader(): JSX.Element {
  //TODO add image for header
  return (
    <View style={styles.registrationHeaderContainer}>
      {/* <Image /> */}
      <Text style={styles.registrationHeaderTitle}>ПРОЦЕС РЕЕСТРАЦІЇ</Text>
    </View>
  );
}
