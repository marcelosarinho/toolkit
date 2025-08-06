import * as C from "./constants";

export function isValidDate(date: Date): boolean {
  return !(date.toString() === C.INVALID_DATE_STRING);
}

export function isInteger(number: number): boolean {
  return Number.isInteger(number);
}

export function isLessThanOne(number: number): boolean {
  return number < 1
}

export function isWeekend(date: Date): boolean {
  return (date.getDay() === 0 || date.getDay() === 6);
}

export function isWeekday(date: Date): boolean {
  return (date.getDay() !== 0 && date.getDay() !== 6);
}

export function isToday(date: Date): boolean | undefined {
  const today = new Date();

  return (date.getUTCFullYear() === today.getUTCFullYear()
      && date.getUTCMonth() === today.getUTCMonth()
      && date.getUTCDate() === today.getUTCDate());
}

export function isSameDay(
  date1: Date,
  date2: Date,
  options?: { useUTC?: boolean }
) {
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

export function isPast(date: Date): boolean {
  return date < new Date();
}

export function isFuture(date: Date): boolean {
  return date > new Date();
}