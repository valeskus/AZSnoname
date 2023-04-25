import * as React from 'react';
import {Image, Pressable} from 'react-native';
import {Icons} from '../Icons';
import {styles} from './styles';

interface Props {
  onPress?: (active: boolean) => void;
  initialState?: boolean;
}

export const Checkbox = ({
  onPress,
  initialState = false,
}: Props): JSX.Element => {
  const [active, setActive] = React.useState(initialState);

  const handlePress = () => {
    const nextState = !active;

    onPress?.(nextState);
    setActive(nextState);
  };

  return (
    <Pressable onPress={handlePress} style={styles.checkContainer}>
      {active && <Image source={Icons.check} style={[styles.checkIcon]} />}
    </Pressable>
  );
};
