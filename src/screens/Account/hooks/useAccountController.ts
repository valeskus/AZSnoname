import {useNavigation} from '@react-navigation/native';
import {useUserStore} from '../../../stores/user';

export const useAccountController = () => {
  const {name} = useUserStore();
  const navigation = useNavigation();
  const onSignIn = () => {
    return navigation.navigate('StackRegistration');
  };
  return {name, onSignIn};
};
