import * as C from "./constants";

export function isValidDate(date: Date) {
  return !(date.toString() === C.INVALID_DATE_STRING);
}