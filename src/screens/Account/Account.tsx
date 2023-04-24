import React from 'react';
import {Text, View} from 'react-native';
import {useUserStore} from '../../stores/user';
import {Button} from '../../UI/Button';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

export function Account(): JSX.Element {
  const {name} = useUserStore();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {!name && (
        <>
          <Text style={styles.text}>
            Зареєструйстесь для створення власного кабінету
          </Text>
          <Button
            title={'Зареєструватись'}
            onPress={() => navigation.navigate('StackRegistration')}
          />
        </>
      )}
      {name && <Text style={styles.text}>Вітаю {name}! </Text>}
    </View>
  );
}
