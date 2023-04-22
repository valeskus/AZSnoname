import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useEnterUserBirthdayController = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate('StackHome');
  }, [navigation]);
  return {onPress};
};
