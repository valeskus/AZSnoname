import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../../../UI/Input';
import {Button} from '../../../UI/Button';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';
import {useEnterUserBirthdayController} from './useEnterUserBirthdayController';
import {LinkButton} from '../../../UI/LinkButton';
import DatePicker from 'react-native-date-picker';
import {Checkbox} from '../../../UI/Checkbox';

export function EnterUserBirthday(): JSX.Element {
  const {
    onPress,
    openDatePicker,
    date,
    isLoading,
    isDatePickerVisible,
    onChangeDate,
    formattedDate,
    onAccptanceCheckboxPress,
    isTermsAccepted,
  } = useEnterUserBirthdayController();

  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <TouchableOpacity
          onPress={openDatePicker}
          style={styles.dateInputTouch}
        />
        <Input
          label={'Дата народження'}
          editable={false}
          value={formattedDate}
        />
        <View style={styles.agreementContainer}>
          <LinkButton
            title="Я погоджуюсь з правилами програми"
            underline={true}
            onPress={() => {}}
          />
          <Checkbox onPress={onAccptanceCheckboxPress} />
        </View>
      </View>

      <Button
        isLoading={isLoading}
        title="ДАЛІ"
        onPress={onPress}
        disabled={!isTermsAccepted}
      />
      {isDatePickerVisible && (
        <DatePicker date={date} onDateChange={onChangeDate} mode={'date'} />
      )}
    </SafeAreaView>
  );
}
