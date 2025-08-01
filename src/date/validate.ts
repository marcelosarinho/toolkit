import * as C from "./constants";

export function isValidDate(date: Date) {
  return !(date.toString() === C.INVALID_DATE_STRING);
}

export function isInteger(number: number) {
  return Number.isInteger(number);
}

export function isLessThanOne(number: number) {
  return number < 1
}