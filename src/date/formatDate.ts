import * as C from "./constants";

/**
 * Formats a given date according to the desired format
 * @param {Date} date - The date to be formatted
 * @param {string} format - The desired format
 * @returns {string} The formatted date
 */
export default function formatDate(date: Date,
  format: 'dd/MM/YYYY'
  | 'dd/MM/YYYY HH:mm'
  | 'dd/MM/YYYY HH:mm:ss'
  | 'yyyy-MM-dd'
  | 'yyyy-MM-dd HH:mm'
  | 'MM/dd/yyyy'
) {
  if (date.toString() === C.INVALID_DATE_STRING) {
    console.log('Invalid date!');
    return;
  }

  if (format === 'dd/MM/YYYY') {
    const iso = date.toISOString();
    return iso.replace(C.REGEX_ISO_DATE, '$3/$2/$1');
  }

  if (format === 'dd/MM/YYYY HH:mm') {
    const iso = date.toISOString();
    return iso.replace(C.REGEX_ISO_DATETIME_HH_MM, '$3/$2/$1 $4:$5');
  }

  if (format === 'dd/MM/YYYY HH:mm:ss') {
    const iso = date.toISOString();
    return iso.replace(C.REGEX_ISO_DATETIME_HH_MM_SS, '$3/$2/$1 $4:$5:$6');
  }

  if (format === 'yyyy-MM-dd') {
    const iso = date.toISOString();
    return iso.replace(C.REGEX_ISO_DATE, '$1-$2-$3');
  }

  if (format === 'yyyy-MM-dd HH:mm') {
    const iso = date.toISOString();
    return iso.replace(C.REGEX_ISO_DATETIME_HH_MM, '$1-$2-$3 $4:$5');
  }

  if (format === "MM/dd/yyyy") {
    const iso = date.toISOString();
    return iso.replace(C.REGEX_ISO_DATE, '$2/$3/$1');
  }
}

const a = formatDate(new Date('02/25/2025 18:30'), "dd/MM/YYYY HH:mm:ss");
const b = formatDate(new Date('12/25/222222 18:30'), "dd/MM/YYYY HH:mm:ss");
const c = formatDate(new Date('12/25/222222 18:30'), "dd/MM/YYYY HH:mm:ss");
const d = formatDate(new Date('12/25/222222 18:30'), "dd/MM/YYYY HH:mm:ss");
const e = formatDate(new Date('12/25/222222 18:30'), "dd/MM/YYYY HH:mm:ss");
const f = formatDate(new Date('12/25/222222 18:30'), "dd/MM/YYYY HH:mm:ss");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);