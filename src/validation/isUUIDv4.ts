import * as C from "./constants";

/**
 * Verify if a string is UUIDv4
 * @param {string} value - The string to be verified
 * @returns {boolean} Returns `true` if the string is UUIDv4, or `false` if it isn't
 */
export default function isUUIDv4(value: string): boolean {  
  return C.UUID_V4_REGEX.test(value);
}