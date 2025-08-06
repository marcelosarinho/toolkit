import * as C from "./constants";

/**
 * Checks if the given date is valid.
 * @param {Date} date - The date to be validated.
 * @returns {boolean} Returns `true` if the date is valid, otherwise `false`.
 */
export function isValidDate(date: Date): boolean {
  return !(date.toString() === C.INVALID_DATE_STRING);
}

/**
 * Checks if the given number is an integer.
 * @param {number} number - The number to be checked.
 * @returns {boolean} Returns `true` if the number is an integer, otherwise `false`.
 */
export function isInteger(number: number): boolean {
  return Number.isInteger(number);
}

/**
 * Checks if the given number is less than one.
 * @param {number} number - The number to be checked.
 * @returns {boolean} Returns `true` if the number is less than 1, otherwise `false`.
 */
export function isLessThanOne(number: number): boolean {
  return number < 1;
}

/**
 * Checks if the given date falls on a weekend (Saturday or Sunday).
 * @param {Date} date - The date to be checked.
 * @returns {boolean} Returns `true` if the date is a weekend, otherwise `false`.
 */
export function isWeekend(date: Date): boolean {
  return (date.getUTCDay() === 0 || date.getUTCDay() === 6);
}

/**
 * Checks if the given date falls on a weekday (Monday through Friday).
 * @param {Date} date - The date to be checked.
 * @returns {boolean} Returns `true` if the date is a weekday, otherwise `false`.
 */
export function isWeekday(date: Date): boolean {
  return (date.getUTCDay() !== 0 && date.getUTCDay() !== 6);
}

/**
 * Checks if the given date is today.
 * Comparison is made in UTC.
 * @param {Date} date - The date to be checked.
 * @returns {boolean | undefined} Returns `true` if the date is today, `false` if not, or `undefined` if the date is invalid.
 */
export function isToday(date: Date): boolean | undefined {
  const today = new Date();

  return (date.getUTCFullYear() === today.getUTCFullYear()
      && date.getUTCMonth() === today.getUTCMonth()
      && date.getUTCDate() === today.getUTCDate());
}

/**
 * Checks if two dates represent the same calendar day.
 * Can compare using either local time or UTC.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @param {Object} [options] - Comparison options.
 * @param {boolean} [options.useUTC=false] - If `true`, compares using UTC. Otherwise, compares using local time.
 * @returns {boolean | undefined} Returns `true` if both dates are the same day, `false` if not, or `undefined` if any date is invalid.
 */
export function isSameDay(
  date1: Date,
  date2: Date,
  options?: { useUTC?: boolean }
): boolean | undefined {
  if (!isValidDate(date1)) {
    console.log('The first date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
    return;
  }

  if (!isValidDate(date2)) {
    console.log('The second date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
    return;
  }

  const UTC = options?.useUTC ?? false;

  if (UTC) {
    return (date1.getUTCFullYear() === date2.getUTCFullYear()
      && date1.getUTCMonth() === date2.getUTCMonth()
      && date1.getUTCDate() === date2.getUTCDate());
  }

  return (date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate());
}

/**
 * Checks if the given date is in the past.
 * @param {Date} date - The date to be checked.
 * @returns {boolean} Returns `true` if the date is in the past, otherwise `false`.
 */
export function isPast(date: Date): boolean {
  return date < new Date();
}

/**
 * Checks if the given date is in the future.
 * @param {Date} date - The date to be checked.
 * @returns {boolean} Returns `true` if the date is in the future, otherwise `false`.
 */
export function isFuture(date: Date): boolean {
  return date > new Date();
}