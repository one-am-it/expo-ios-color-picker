import {
    ExpoIosColorPicker,
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
            <ExpoIosColorPicker
                label={'Colore'}
                defaultValue={'#fff00055'}
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
