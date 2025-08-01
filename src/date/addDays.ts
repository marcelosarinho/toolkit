import { isLessThanOne, isInteger, isValidDate } from "./validate";

/**
 * Add days to a specific date
 * @param {Date} date - The original date to which days will be added.
 * @param {number} days - The number of days to add to the given date.
 * @returns {string | undefined} The resulting date as an ISO string, or undefined if the input is invalid.
 */
export default function addDays(date: Date, days: number): string | undefined {
  if (!isValidDate(date)) {
    console.log('Invalid date! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
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

  const daysInMs = days * 60 * 60 * 24 * 1000;
  const dateInMs = date.getTime();
  const result = dateInMs + daysInMs;

  return new Date(result).toISOString()
}