import * as C from "./constants";

/**
 * Validates whether a given string is a valid hexadecimal color code.
 *
 * @param {string} value - The string to validate as a hexadecimal color.
 * @returns {boolean} `true` if the string is a valid hex color (e.g., "#FFF", "#ffffff"), otherwise `false`.
 *
 * @example
 * isHexColor("#FFF");       // true
 * isHexColor("#ffffff");    // true
 * isHexColor("123456");     // false
 * isHexColor("#GGG");       // false
 */
export default function isHexColor(value: string): boolean {
  return C.HEX_COLOR_REGEX.test(value);
}