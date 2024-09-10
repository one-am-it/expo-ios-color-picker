import { EventEmitter } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoIosColorPicker.web.ts
// and on native platforms to ExpoIosColorPicker.ts
import type {
    ExpoIosColorPickerViewProps,
    ColorPickerValue,
    ColorChangeEvent,
} from './ExpoIosColorPicker.types';
import ExpoIosColorPickerView from './ExpoIosColorPickerView';

export {
    ExpoIosColorPickerView,
    ExpoIosColorPickerViewProps,
    ColorPickerValue,
    ColorChangeEvent,
};
