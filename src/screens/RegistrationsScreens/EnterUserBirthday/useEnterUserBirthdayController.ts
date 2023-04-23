import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useUserStore} from '../../../stores/user';
import {useAddUserBirthday} from '../../../stores/user/hooks/useAddUserBirthday';

export const useEnterUserBirthdayController = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation();
  const userStore = useUserStore();
  const addUserBirthday = useAddUserBirthday();

  const getStringDate = () => {
    let mm: string = '';
    let dd: string = '';

    let yy = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let day = date.getDate();

    if (mounth < 10) {
      mm = '0' + mounth;
    }
    if (day < 10) {
      dd = '0' + day;
    }
    const stringDate = (dd || day) + '.' + (mm || mounth) + '.' + yy;
    return stringDate;
  };

  const handleOpenPicker = useCallback(() => {
    setShowDatePicker(true);
  }, []);

  const inputValue = getStringDate();

  const onPress = async () => {
    setShowDatePicker(false);
    if (!userStore.phoneNumber) {
      return;
    }
    //TODO
    await addUserBirthday(inputValue, userStore.phoneNumber);

    navigation.navigate('StackHome');
  };

  return {
    onPress,
    handleOpenPicker,
    date,
    showDatePicker,
    setDate,
    inputValue,
  };
};
