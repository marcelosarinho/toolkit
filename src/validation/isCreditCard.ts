/**
 * Validates whether a given string is a valid credit card number using the Luhn algorithm.
 *
 * @param {string} value - The string to validate as a credit card number.
 * @returns {boolean} `true` if the string is a valid credit card number, otherwise `false`.
 *
 * The function uses the Luhn algorithm (modulus 10) to determine the validity of the number.
 * It ignores non-digit characters like spaces or dashes before performing validation.
 *
 * @example
 * isCreditCard("4111 1111 1111 1111");   // true
 * isCreditCard("5500-0000-0000-0004");   // true
 * isCreditCard("1234 5678 9012 3456");   // false
 * isCreditCard("abcd efgh ijkl mnop");   // false
 */
export default function isCreditCard(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  let sum = 0;
  const length = digits.length;
  const parity = length % 2;

  if (length === 0) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    let digit = parseInt(digits[i], 10);

    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
  }

  return sum % 10 === 0;
}