import * as C from "./constants";
import { isValidDate } from "./validate";

/**
 * Calculates the age based on the given birthdate
 * @param {Date} birthdate The birthdate to calculate the age
 * @returns {number | undefined} - The age, or undefined if the input is invalid.
 */
export default function getAge(birthdate: Date): number | undefined {
  if (!isValidDate(birthdate)) {
    console.log(C.INVALID_DATE_STRING_MESSAGE);
    return;
  }
}