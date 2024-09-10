import { ColorValue, ViewProps } from 'react-native';

export type ColorPickerValue = ColorValue | undefined;

export interface ColorChangeEvent {
    nativeEvent: {
        color: ColorPickerValue;
    };
}

export type ExpoIosColorPickerViewProps = ViewProps & {
    label: string;
    defaultValue?: ColorPickerValue;
    onChange?: (event: ColorChangeEvent) => void;
};

export type ExpoIosColorPickerViewActualProps = Omit<
    ExpoIosColorPickerViewProps,
    'onChange'
> & {
    onColorPicked?: (event: ColorChangeEvent) => void;
};
