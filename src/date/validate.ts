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
  if (date.getDay() === 0 || date.getDay() === 6) {
    return true;
  }

  return false;
}

export function isPast(date: Date): boolean {
  if (date < new Date()) {
    return true;
  }

  return false;
}

export function isFuture(date: Date): boolean {
  if (date > new Date()) {
    return true;
  }

  return false;
}