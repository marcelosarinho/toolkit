import * as C from "./constants";

export function validateDate(date: Date) {
  return date.toISOString() === C.INVALID_DATE_STRING;
}