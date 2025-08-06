import * as C from "../../src/date/constants";
import getDaysBetween from "../../src/date/getDaysBetween";

describe('getDaysBetween', () => {
  const originalConsoleLog = console.log;
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('should log "The first date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD"', () => {
    const invalidDate = new Date('invalid-date');
    expect(invalidDate.toString()).toBe(C.INVALID_DATE_STRING);

    const result = getDaysBetween(invalidDate, invalidDate);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith('The first date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
  });
})