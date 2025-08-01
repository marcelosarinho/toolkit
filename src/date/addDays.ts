import * as C from "./constants";

export default function addDays(date: Date, days: number) {
  if (date.toString() === C.INVALID_DATE_STRING) {
    console.log('Invalid date!');
    return;
  }

  if (days < 1) {
    console.log('The days parameter must be greater or equal than 1!');
    return;
  }

  if (!Number.isInteger(days)) {
    console.log('The days parameter must be an integer!');
    return;
  }

  const daysInMs = days * 86400 * 1000;
  const dateInMs = date.getTime();
  const result = dateInMs + daysInMs;

  console.log(new Date(result).toISOString());
}