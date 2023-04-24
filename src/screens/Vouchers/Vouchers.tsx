import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../UI/Button';
import {styles} from './styles';
import {useVouchersController} from './hooks';

export function Vouchers(): JSX.Element {
  const {name, onSignIn} = useVouchersController();
  return (
    <View style={styles.container}>
      {!name && (
        <>
          <Text style={styles.text}>
            Зареєструйстесь для створення власного кабінету
          </Text>
          <Button title={'Зареєструватись'} onPress={onSignIn} />
        </>
      )}
      {name && <Text style={styles.text}>Вітаю {name}! </Text>}
    </View>
  );
}
