import { isValidDate } from "./validate";

/**
 * 
 * @param {Date} date - The original date to which hours will be added.
 * @param {number} hours - The number of hours to add to the given date.
 * @returns {string | undefined} The resulting date as an ISO string, or undefined if the input is invalid.
 */
export default function addHours(date: Date, hours: number) {
  if (!isValidDate(date)) {
    console.log('Invalid date! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
    return;
  }

  if (hours < 1) {
    console.log('The hours parameter must be greater or equal than 1!');
    return;
  }

  if (!Number.isInteger(hours)) {
    console.log('The hours parameter must be an integer!');
    return;
  }

  const hoursInMs = hours * 60 * 60 * 1000;
  const dateInMs = date.getTime();
  const result = hoursInMs + dateInMs;

  return new Date(result).toISOString();
}