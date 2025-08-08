/**
 * Verify if a string is a valid JSON
 * @param {string} value - The string to be parsed as JSON
 * @returns {boolean} Returns `true` if the string is a valid JSON, or `false` if it isn't
 */
export default function isJSONString(value: string): boolean {
  if (!value || typeof value !== "string") {
    return false;
  }

  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}