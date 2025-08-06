import * as C from "./constants";
import { toMidnightUTC } from "./utils";

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

  if (date.getUTCFullYear() === today.getUTCFullYear()
      && date.getUTCMonth() === today.getUTCMonth()
      && date.getUTCDate() === today.getUTCDate())
    {
      return true;
  }

  return false;
}

export function isPast(date: Date): boolean {
  return date < new Date();
}

export function isFuture(date: Date): boolean {
  return date > new Date();
}