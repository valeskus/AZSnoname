import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../../../UI/Input';
import {Button} from '../../../UI/Button';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';
import {useEnterUserBirthdayController} from './useEnterUserBirthdayController';
import {LinkButton} from '../../../UI/LinkButton';
import DatePicker from 'react-native-date-picker';

export function EnterUserBirthday(): JSX.Element {
  const {onPress, handleOpenPicker, date, showDatePicker, setDate, inputValue} =
    useEnterUserBirthdayController();

  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <TouchableOpacity
          onPress={handleOpenPicker}
          style={styles.dateInputTouch}
        />
        <Input
          label={'Дата народження'}
          onChange={() => {}}
          editable={false}
          value={inputValue}
        />
        <LinkButton
          title="Я погоджуюсь з правилами програми"
          underline={true}
          onPress={() => {}}
          selectButton={true}
        />
      </View>

      <Button title="ДАЛІ" onPress={onPress} />
      {showDatePicker && (
        <DatePicker date={date} onDateChange={setDate} mode={'date'} />
      )}
    </SafeAreaView>
  );
}
