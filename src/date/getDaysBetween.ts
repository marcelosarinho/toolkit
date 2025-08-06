import { toMidnightUTC } from "./utils";
import { isValidDate } from "./validate";

/**
 * Calculates the number of days between two dates.
 * @param {Date} date1 - The start date.
 * @param {Date} date2 - The end date.
 * @returns {number | undefined} The number of days between the two dates, or undefined if the input is invalid.
 */
export default function getDaysBetween(date1: Date, date2: Date): number | undefined {
  if (!isValidDate(date1)) {
    console.log('The first date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
    return;
  }

  if (!isValidDate(date2)) {
    console.log('The second date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
    return;
  }

  date1 = toMidnightUTC(date1);
  date2 = toMidnightUTC(date2);
  const result = Math.abs(date1.getTime() - date2.getTime());
  return result / 60 / 60 / 24 / 1000;
}