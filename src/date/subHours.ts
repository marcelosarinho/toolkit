import * as C from "./constants";
import { isLessThanOne, isInteger, isValidDate } from "./validate";

/**
 * Subtract hours from a specific date
 * @param {Date} date - The original date from which hours will be subtracted.
 * @param {number} hours - The number of hours to subtract to the given date.
 * @returns {string | undefined} The resulting date as an ISO string, or undefined if the input is invalid.
 */
export default function subHours(date: Date, hours: number): string | undefined {
  if (!isValidDate(date)) {
    console.log(C.INVALID_DATE_STRING_MESSAGE);
    return;
  }

  if (isLessThanOne(hours)) {
    console.log('The hours parameter must be greater or equal than 1!');
    return;
  }

  if (!isInteger(hours)) {
    console.log('The hours parameter must be an integer!');
    return;
  }

  const hoursInMs = hours * 60 * 60 * 1000;
  const dateInMs = date.getTime();
  const result = dateInMs - hoursInMs;

  return new Date(result).toISOString();
}