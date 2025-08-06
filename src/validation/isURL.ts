/**
 * Verify if an string is an URL
 * @param {string} url - The URL to be parsed
 * @returns {boolean} Returns `true` if the string is an URL, or `false` if it isn't
 */
export default function isURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
