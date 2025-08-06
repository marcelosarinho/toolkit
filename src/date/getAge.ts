import * as C from "./constants";
import { isValidDate } from "./validate";

/**
 * Calculates the age based on the given birthdate
 * @param {Date} birthdate - The birthdate to calculate the age
 * @returns {number | undefined} The age, or undefined if the input is invalid.
 */
export default function getAge(birthdate: Date): number | undefined {
  if (!isValidDate(birthdate)) {
    console.log(C.INVALID_DATE_STRING_MESSAGE);
    return;
  }

  if (birthdate.getTime() > new Date().getTime()) {
    console.log("The birthdate cannot be greater than today's date!")
    return;
  }

  const birthdateInMs = birthdate.getTime();
  const result = new Date().getTime() - birthdateInMs;
  const resultDate = new Date(result);

  return resultDate.getFullYear() - 1970;
}