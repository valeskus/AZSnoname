import {useNavigation} from '@react-navigation/native';
import {useSignOut} from '../../../../stores/user/hooks/useSignOut';
import {useUserStore} from '../../../../stores/user';

export const useCustomDriverController = () => {
  const signOut = useSignOut();
  const {name} = useUserStore();

  const navigation = useNavigation();

  const onSignIn = () => {
    return navigation.navigate('StackRegistration');
  };
  return {signOut, name, onSignIn};
};
