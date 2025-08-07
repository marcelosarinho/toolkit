/**
 * Checks whether a number is within a given inclusive range.
 *
 * @param {number} value - The number to check.
 * @param {number} min - The minimum bound of the range (inclusive).
 * @param {number} max - The maximum bound of the range (inclusive).
 * @returns {boolean} `true` if the number is within the range [min, max], otherwise `false`.
 *
 * @example
 * isInRange(5, 1, 10);    // true
 * isInRange(1, 1, 10);    // true
 * isInRange(10, 1, 10);   // true
 * isInRange(0, 1, 10);    // false
 * isInRange(11, 1, 10);   // false
 */
export default function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}