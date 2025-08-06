import * as C from "../../src/date/constants";
import getDaysBetween from "../../src/date/getDaysBetween";

describe("getDaysBetween", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('should log "The first date is invalid!..." and return undefined', () => {
    const invalidDate = new Date("invalid-date");
    expect(invalidDate.toString()).toBe(C.INVALID_DATE_STRING);

    const result = getDaysBetween(invalidDate, invalidDate);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith(
      "The first date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD"
    );
  });

  it('should log "The second date is invalid!..." and return undefined', () => {
    const validDate = new Date("2020-01-01");
    const invalidDate = new Date("invalid-date");

    const result = getDaysBetween(validDate, invalidDate);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith(
      "The second date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD"
    );
  });

  it("should return 0 when both dates are the same (at midnight)", () => {
    const date = new Date("2022-08-01T00:00:00Z");

    const result = getDaysBetween(date, date);
    expect(result).toBe(0);
  });

  it("should return 1 when dates are one day apart", () => {
    const date1 = new Date("2022-08-01T00:00:00Z");
    const date2 = new Date("2022-08-02T00:00:00Z");

    const result = getDaysBetween(date1, date2);
    expect(result).toBe(1);
  });

  it("should return 7 when dates are 7 days apart", () => {
    const date1 = new Date("2022-08-01");
    const date2 = new Date("2022-08-08");

    const result = getDaysBetween(date1, date2);
    expect(result).toBe(7);
  });

  it("should work regardless of date order (absolute difference)", () => {
    const date1 = new Date("2022-08-10");
    const date2 = new Date("2022-08-01");

    const result = getDaysBetween(date1, date2);
    expect(result).toBe(9);
  });

  it("should ignore time parts and compare only by date (UTC midnight)", () => {
    const date1 = new Date("2022-08-01T23:59:59Z");
    const date2 = new Date("2022-08-02T00:00:00Z");

    const result = getDaysBetween(date1, date2);
    expect(result).toBe(1);
  });
});
