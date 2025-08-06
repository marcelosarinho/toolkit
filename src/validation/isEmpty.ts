/**
 * Checks if a given value is empty.
 *
 * This function returns `true` if the value is:
 * - `null`
 * - `undefined`
 * - `false`
 * - `0`
 * - An empty string `""`
 * - `NaN`
 *
 * Otherwise, it returns `false`.
 *
 * @param {any} value - The value to check for emptiness.
 * @returns {boolean} Returns `true` if the value is considered empty, otherwise `false`.
 *
 * @example
 * isEmpty(null);      // true
 * isEmpty(undefined); // true
 * isEmpty(false);     // true
 * isEmpty(0);         // true
 * isEmpty('');        // true
 * isEmpty(NaN);       // true
 * isEmpty('hello');   // false
 * isEmpty(123);       // false
 */
export default function isEmpty(value: any): boolean {
  if (!value) {
    return true;
  }

  return false;
}