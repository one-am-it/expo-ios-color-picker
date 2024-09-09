import { ExpoIosColorPickerView } from '@one-am/expo-ios-color-picker';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [color, setColor] = useState<string | undefined>(undefined);

    return (
        <View style={styles.container}>
            <ExpoIosColorPickerView
                label={'Colore'}
                defaultValue={'#FF0000'}
                style={{ flex: 1 }}
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
