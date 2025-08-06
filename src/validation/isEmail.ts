import * as C from "./constants";

/**
 * Validates whether a given string is a valid email address.
 *
 * This function uses a regular expression to determine if the input string
 * follows the standard email format. By default, a simple regular expression
 * is used, but a more complex and stricter validation can be applied by
 * enabling the `complex` option.
 *
 * @param {string} email - The email address to validate.
 * @param {Object} [options] - Optional configuration object.
 * @param {boolean} [options.complex=false] - If `true`, uses a stricter regular expression
 *                                            for more comprehensive validation.
 *                                            If `false` or omitted, uses a simpler regex.
 *
 * @returns {boolean} Returns `true` if the email is valid according to the selected
 *                    validation level, otherwise `false`.
 *
 * @example
 * isEmail("user@example.com"); // true
 * isEmail("user@example", { complex: true }); // false
 */
export default function isEmail(
  email: string,
  options?: { complex?: boolean }
): boolean {
  const isComplex = options?.complex ?? false;

  if (isComplex) {
    return C.COMPLEX_EMAIL_REGEX.test(email);
  }

  return C.SIMPLE_EMAIL_REGEX.test(email);
}