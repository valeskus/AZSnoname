import React from 'react';
import {ScreenWrapper} from '../../../../components';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {Icons} from '../../../../UI/Icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

interface Props extends React.PropsWithChildren {
  showBackButton?: boolean;
}

export function RegistrationScreenWrapper({
  children,
  showBackButton = true,
}: Props): JSX.Element {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const onGoBack = () => {
    return navigation.goBack();
  };

  return (
    <>
      <ScreenWrapper style={styles.container}>{children}</ScreenWrapper>
      <View style={[styles.registrationHeaderContainer, {marginTop: top}]}>
        {showBackButton && (
          <TouchableOpacity onPress={onGoBack} style={styles.headerItem}>
            <Image source={Icons.arrowLeft} style={styles.homeHeaderIcon} />
          </TouchableOpacity>
        )}
        <View style={styles.headerContent}>
          <Image source={Icons.logo} style={styles.logoImage} />
          <Text style={styles.registrationHeaderTitle}>ПРОЦЕС РЕЕСТРАЦІЇ</Text>
        </View>
      </View>
    </>
  );
}
