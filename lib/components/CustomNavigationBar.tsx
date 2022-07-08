import { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import { useSystemNavigationBar } from '../hooks/useSystemNavigationBar';

const Button: FC<{
  variant?: 'primary' | 'secondary';
  text?: string;
  onPress: (event: GestureResponderEvent) => void;
}> = ({ variant = 'primary', text, onPress }) => (
  <Pressable
    style={({ pressed }) => buttonStyle({ pressed, variant })}
    onPress={onPress}
  >
    <Text style={{ color: '#ffffff' }}>{text}</Text>
  </Pressable>
);

export function CustomNavigationBar() {
  const systemNavigationBar = useSystemNavigationBar();

  return systemNavigationBar.isVisible ? (
    <View style={containerStyle}>
      <Button
        text="Fullscreen"
        onPress={systemNavigationBar.toggleVisibility}
      />
      <Button
        text="Edit widgets"
        onPress={() => console.log('nav edit layout')}
      />
      <Button text="Settings" onPress={() => console.log('nav settings')} />
    </View>
  ) : null;
}

const containerStyle: ViewStyle = {
  flex: 0,
  height: 80,
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 8,
  paddingVertical: 16,
};

type ButtonStyleProps = {
  variant?: 'primary' | 'secondary';
  pressed?: boolean;
};

const buttonStyle = ({
  variant = 'primary',
  pressed = false,
}: ButtonStyleProps = {}): ViewStyle => ({
  flex: 1,
  height: '100%',
  paddingHorizontal: 16,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 8,
  opacity: pressed ? 0.85 : 1,
  ...(variant === 'primary' && {
    backgroundColor: '#303030',
  }),
  ...(variant === 'secondary' && {
    backgroundColor: '#954c4c',
  }),
});
