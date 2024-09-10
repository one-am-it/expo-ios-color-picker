import { ColorValue, processColor } from 'react-native';

/**
 * Converts a ColorValue from React Native into an RGBA hex string.
 *
 * @param {ColorValue} color - The color value to convert.
 * @returns {string | null} The color in RGB hex format (#RRGGBB) or RGBA hex format (#RRGGBBAA) or null if the color is invalid.
 */
export function colorValueToHex(color: ColorValue) {
    // Use processColor to get the integer representation of the color
    const processedColor = processColor(color);

    // If the color is not valid or not recognized, return null
    if (processedColor === null || processedColor === undefined) {
        return null;
    }

    // Explicitly cast processedColor to a number
    const colorInt = processedColor as number;

    // Extract the RGBA components
    const a = (colorInt >> 24) & 0xff; // Alpha
    const r = (colorInt >> 16) & 0xff; // Red
    const g = (colorInt >> 8) & 0xff; // Green
    const b = colorInt & 0xff; // Blue

    // Convert each component to a two-character hex string
    const hexA = a.toString(16).padStart(2, '0');
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    // Combine to form the RGBA hex string
    return `#${hexR}${hexG}${hexB}${hexA}`;
}
