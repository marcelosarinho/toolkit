import { isValidDate } from "./validate";

export default function addHours(date: Date, hours: number) {
  if (!isValidDate(date)) {
    console.log('Invalid date! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
    return;
  }
}