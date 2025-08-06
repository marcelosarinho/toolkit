/**
 * Verify if a value is empty or not
 * @param {any} value - Any value
 * @returns {boolean} Returns `true` if the value is empty, or `false` if the value isn't empty
 */
export default function isEmpty(value: any): boolean {
  if (!value) {
    return true;
  }

  return false;
}