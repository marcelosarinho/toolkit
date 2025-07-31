import * as C from "./constants";

/**
 * Formats a given date according to the desired format
 * @param {Date} date - The date to be formatted
 * @param {string} format - The desired format
 * @returns {string} The formatted date
 */
export default function formatDate(date: Date, format: 'timestamp' | 'ISO' | 'dd/mm/YYYY') {
  if (date.toString() === C.INVALID_DATE_STRING) {
    console.log('Invalid date!');
    return;
  }

  if (format === 'timestamp') {
    const formattedDate = date.getTime();
    return formattedDate;
  }

  if (format === 'ISO') {
    const formattedDate = date.toISOString();
    return formattedDate;
  }

  if (format === 'dd/mm/YYYY') {
    const iso = date.toISOString();

    const formattedDate = iso.replace(C.dd_mm_YYYY_REGEX, '$3/$2/$1');
    return formattedDate;
  }
}