import * as React from 'react';

import { ExpoIosColorPickerViewProps } from './ExpoIosColorPicker.types';

export default function ExpoIosColorPickerView(
    props: ExpoIosColorPickerViewProps
) {
    return (
        <div>
            <span>{String(props.defaultValue)}</span>
        </div>
    );
}
