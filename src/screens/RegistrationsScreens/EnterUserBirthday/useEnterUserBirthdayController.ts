import {useNavigation} from '@react-navigation/native';
import {useAddUserBirthdayThrowable} from '../../../stores/user/hooks';
import {useAcceptTerms, useDatePickerController} from './hooks';
import {useState} from 'react';

export const useEnterUserBirthdayController = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    openDatePicker,
    closeDatePicker,
    isDatePickerVisible,
    date,
    formattedDate,
    onChangeDate,
  } = useDatePickerController();

  const AcceptTerms = useAcceptTerms();

  const navigation = useNavigation();
  const addUserBirthdayThrowable = useAddUserBirthdayThrowable();

  const onPress = async () => {
    closeDatePicker();
    setLoading(true);

    try {
      await addUserBirthdayThrowable(formattedDate);
      navigation.navigate('StackHome');
    } catch (error) {
      //TODO: log error
    } finally {
      setLoading(false);
    }
  };

  return {
    onPress,
    openDatePicker,
    date,
    isLoading,
    isDatePickerVisible,
    onChangeDate,
    formattedDate,
    onAccptanceCheckboxPress: AcceptTerms.setAcceptance,
    isTermsAccepted: AcceptTerms.isAccepted,
  };
};
