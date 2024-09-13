# expo-ios-color-picker

A module that wraps iOS' native color picker.

**Warning: This module only works with Expo projects and iOS versions 14.0 and above. 
On Android, this module will do nothing.**

## Installation

```bash
npx expo install @one-am/expo-ios-color-picker expo-build-properties
```

You also need to set the iOS deployment target to 14.0 or higher in your `app.json`:

```json
{
    "expo": {
      "plugins": [
        [
          "expo-build-properties",
          {
            "ios": {
              "deploymentTarget": "14.0"
            }
          }
        ]
      ]
    }
}
```

## Sample Usage

```tsx
import {
    ExpoIosColorPickerView,
    type ColorPickerValue,
} from '@one-am/expo-ios-color-picker';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [color, setColor] = useState<ColorPickerValue>(undefined);

    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center' }}>
                Selected color:{' '}
                <Text style={{ fontWeight: 'bold' }}>{String(color)}</Text>
            </Text>
            <ExpoIosColorPickerView
                label={'Colore'}
                defaultValue={'rgba(255, 0, 0, 1)'}
                style={{ height: 100 }}
                onChange={({ nativeEvent: { color } }) => {
                    setColor(color);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 20,
    },
});
```
