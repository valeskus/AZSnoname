import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../UI/Button';
import {Input} from '../../UI/Input';

export function Registration(): JSX.Element {
  return (
    <View style={styles.detailsScreenContainer}>
      <Button title={'Title'} onPress={() => () => {}} />
      <Input />
    </View>
  );
}
