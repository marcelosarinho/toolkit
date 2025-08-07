import * as C from "./constants";

/**
 * Checks whether a given string is a valid MIME type.
 *
 * @param {string} value - The string to validate as a MIME type.
 * @returns {boolean} `true` if the string is a recognized MIME type, otherwise `false`.
 *
 * The function checks if the given value exists in a predefined list of valid MIME types.
 *
 * @example
 * isMimeType("application/json");       // true
 * isMimeType("text/html");              // true
 * isMimeType("image/unknown");          // false
 * isMimeType("not/a-mime-type");        // false
 */
export default function isMimeType(value: string): boolean {
  return C.MIME_TYPES.includes(value);
}