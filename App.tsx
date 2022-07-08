import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CustomNavigationBar } from './lib/components/CustomNavigationBar';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <Text>Count: {count}</Text>
        <Button onPress={() => setCount(count + 1)} title="+1" />
        <Button onPress={() => setCount(count - 1)} title="-1" />
        <Button
          onPress={() => {
            Speech.speak('The bus leaves in 15 minutes', {
              pitch: 1,
            });
          }}
          title="SPEAK!"
        />
      </View>
      <CustomNavigationBar />
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  gridContainer: {
    flex: 1,
  },
});
