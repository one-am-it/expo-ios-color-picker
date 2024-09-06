import { StyleSheet, Text, View } from 'react-native';

import * as ExpoIosColorPicker from 'expo-ios-color-picker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoIosColorPicker.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
