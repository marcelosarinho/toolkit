import * as C from "./constants";

/**
 * Validates whether a given string is a valid slug.
 *
 * A valid slug typically contains only lowercase letters, numbers, and hyphens,
 * and does not start or end with a hyphen, nor contain consecutive hyphens.
 *
 * @param {string} value - The string to validate as a slug.
 * @returns {boolean} `true` if the string is a valid slug, otherwise `false`.
 *
 * @example
 * isSlug("my-awesome-post");     // true
 * isSlug("my_awesome_post");     // false
 * isSlug("-invalid-start");      // false
 * isSlug("invalid--double");     // false
 * isSlug("Valid");               // false
 */
export default function isSlug(value: string): boolean {
  if (!value || typeof value !== 'string') {
    return false;
  }

  return C.SLUG_REGEX.test(value);
}