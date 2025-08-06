import * as C from "./constants";
import { isLessThanOne, isInteger, isValidDate } from "./validate";

/**
 * Subtract days from a specific date
 * @param {Date} date - The original date from which days will be subtracted.
 * @param {number} days - The number of days to subtract to the given date.
 * @returns {string | undefined} The resulting date as an ISO string, or undefined if the input is invalid.
 */
export default function subDays(date: Date, days: number): string | undefined {
  if (!isValidDate(date)) {
    console.log(C.INVALID_DATE_STRING_MESSAGE);
    return;
  }

  if (isLessThanOne(days)) {
    console.log('The days parameter must be greater or equal than 1!');
    return;
  }

  if (!isInteger(days)) {
    console.log('The days parameter must be an integer!');
    return;
  }

  const daysInMs = days * 60 * 60 * 24 * 1000
  const dateInMs = date.getTime();
  const result = dateInMs - daysInMs;

  return new Date(result).toISOString();
}