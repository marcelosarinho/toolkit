import * as C from "../../src/date/constants";
import getAge from "../../src/date/getAge";

describe("getAge", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return the correct age for a valid past date", () => {
    const birthdate = new Date("2000-01-01");
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - 2000;

    const age = getAge(birthdate);
    expect(age).toBe(expectedAge);
  });

  it("should return 0 for a birthdate on today's date", () => {
    const today = new Date();
    const birthdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const age = getAge(birthdate);
    expect(age).toBe(0);
  });

  it("should return undefined and log a message for an invalid date", () => {
    const invalidDate = new Date("invalid-date");
    expect(invalidDate.toString()).toBe(C.INVALID_DATE_STRING);

    const age = getAge(invalidDate);
    expect(age).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith(C.INVALID_DATE_STRING_MESSAGE);
  });

  it("should return undefined and log a message if the birthdate is in the future", () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);

    const age = getAge(futureDate);
    expect(age).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith("The birthdate cannot be greater than today's date!");
  });
});
