import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import {
    ExpoIosColorPickerViewActualProps,
    ExpoIosColorPickerViewProps,
} from './ExpoIosColorPicker.types';

const NativeView: React.ComponentType<ExpoIosColorPickerViewActualProps> =
    requireNativeViewManager('ExpoIosColorPicker');

export default function ExpoIosColorPickerView({
    onChange,
    ...props
}: ExpoIosColorPickerViewProps) {
    return <NativeView {...props} onColorPicked={onChange} />;
}
