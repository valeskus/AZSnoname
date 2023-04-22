import {useCallback} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

export const useEnterCodeController = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();

  // const [SMSCode, setSMSCode] = useState();

  // const handleCheckCode = useCallback(()=>{

  // },[])

  const handlerCode = useCallback((code: number) => {
    // setSMSCode(code);
    console.log('code', code);
  }, []);
  return {
    handlerCode,
    route,
    navigation,
  };
};
