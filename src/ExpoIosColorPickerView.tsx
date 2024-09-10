import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import {
    ExpoIosColorPickerViewActualProps,
    ExpoIosColorPickerViewProps,
} from './ExpoIosColorPicker.types';
import { colorValueToHex } from './utils/colorValueToHex';
import { useMemo } from 'react';

const NativeView: React.ComponentType<ExpoIosColorPickerViewActualProps> =
    requireNativeViewManager('ExpoIosColorPicker');

export default function ExpoIosColorPickerView({
    onChange,
    defaultValue,
    ...props
}: ExpoIosColorPickerViewProps) {
    const processedDefaultValue = useMemo(
        () =>
            defaultValue
                ? (colorValueToHex(defaultValue) ?? undefined)
                : undefined,
        [defaultValue]
    );

    if (defaultValue && !processedDefaultValue) {
        console.warn(
            `ExpoIosColorPickerView: defaultValue "${String(defaultValue)}" is not a valid color value.`
        );
    }

    return (
        <NativeView
            {...props}
            onColorPicked={onChange}
            defaultValue={processedDefaultValue}
        />
    );
}
