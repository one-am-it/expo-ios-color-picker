import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoIosColorPickerViewProps } from './ExpoIosColorPicker.types';

const NativeView: React.ComponentType<ExpoIosColorPickerViewProps> =
  requireNativeViewManager('ExpoIosColorPicker');

export default function ExpoIosColorPickerView(props: ExpoIosColorPickerViewProps) {
  return <NativeView {...props} />;
}
