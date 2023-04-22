import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useEnterUserNameController = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate('EnterUserBirthday');
  }, [navigation]);
  return {onPress};
};
