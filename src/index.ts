import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoIosColorPicker.web.ts
// and on native platforms to ExpoIosColorPicker.ts
import ExpoIosColorPickerModule from './ExpoIosColorPickerModule';
import ExpoIosColorPickerView from './ExpoIosColorPickerView';
import { ChangeEventPayload, ExpoIosColorPickerViewProps } from './ExpoIosColorPicker.types';

// Get the native constant value.
export const PI = ExpoIosColorPickerModule.PI;

export function hello(): string {
  return ExpoIosColorPickerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoIosColorPickerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoIosColorPickerModule ?? NativeModulesProxy.ExpoIosColorPicker);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoIosColorPickerView, ExpoIosColorPickerViewProps, ChangeEventPayload };
