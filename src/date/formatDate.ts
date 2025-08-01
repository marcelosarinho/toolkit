import * as C from "./constants";
import { validateDate } from "./validate";

type DateFormat = 'shortDate' | 'shortDateTime' | 'fullDateTime' | 'isoDate' | 'isoDateTime' | 'usDate' | 'time' | 'fulltime';

const FORMATTERS: Record<DateFormat, (iso: string) => string> = {
  shortDate: iso => iso.replace(C.REGEX_ISO_DATE, '$3/$2/$1'),
  shortDateTime: iso => iso.replace(C.REGEX_ISO_DATETIME_HH_MM, '$3/$2/$1 $4:$5'),
  fullDateTime: iso => iso.replace(C.REGEX_ISO_DATETIME_HH_MM_SS, '$3/$2/$1 $4:$5:$6'),
  isoDate: iso => iso.replace(C.REGEX_ISO_DATE, '$1-$2-$3'),
  isoDateTime: iso => iso.replace(C.REGEX_ISO_DATETIME_HH_MM, '$1-$2-$3 $4:$5'),
  usDate: iso => iso.replace(C.REGEX_ISO_DATE, '$2/$3/$1'),
  time: iso => iso.replace(C.REGEX_ISO_DATETIME_HH_MM, '$4:$5'),
  fulltime: iso => iso.replace(C.REGEX_ISO_DATETIME_HH_MM_SS, '$4:$5:$6'),
}

/**
 * Formats a given date according to the desired format
 * @param {Date} date - The date to be formatted
 * @param {string} format - The desired format
 * @returns {string} The formatted date
 */
export default function formatDate(date: Date, format: DateFormat) {
  if (!validateDate(date)) {
    console.log('Invalid date! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
    return;
  }

  const formatter = FORMATTERS[format];
  if (!formatter) {
    console.log('Invalid date format!');
    return;
  }

  return formatter(date.toISOString());
}