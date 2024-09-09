import {
    NativeModulesProxy,
    EventEmitter,
    Subscription,
} from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoIosColorPicker.web.ts
// and on native platforms to ExpoIosColorPicker.ts
import { ExpoIosColorPickerViewProps } from './ExpoIosColorPicker.types';
import ExpoIosColorPickerModule from './ExpoIosColorPickerModule';
import ExpoIosColorPickerView from './ExpoIosColorPickerView';

// Get the native constant value.
export const PI = ExpoIosColorPickerModule.PI;

export function hello(): string {
    return ExpoIosColorPickerModule.hello();
}

export async function setValueAsync(value: string) {
    return await ExpoIosColorPickerModule.setValueAsync(value);
}

const emitter = new EventEmitter(
    ExpoIosColorPickerModule ?? NativeModulesProxy.ExpoIosColorPicker
);

export { ExpoIosColorPickerView, ExpoIosColorPickerViewProps };
