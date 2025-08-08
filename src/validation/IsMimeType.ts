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
 * isMIMEType("application/json");       // true
 * isMIMEType("text/html");              // true
 * isMIMEType("image/unknown");          // false
 * isMIMEType("not/a-mime-type");        // false
 */
export default function isMIMEType(value: string): boolean {
  return C.MIME_TYPES.includes(value);
}