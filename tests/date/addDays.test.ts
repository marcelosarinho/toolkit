import addDays from "../../src/date/addDays";
import * as C from '../../src/date/constants';

describe('addDays', () => {
  const originalConsoleLog = console.log;
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('should log "Invalid date! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD" if the date is invalid', () => {
    const invalidDate = new Date('invalid-date');
    expect(invalidDate.toString()).toBe(C.INVALID_DATE_STRING);

    const result = addDays(invalidDate, 5);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith('Invalid date! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD');
  });

  it('should log error if days is negative', () => {
    const date = new Date('2025-01-01');
    const result = addDays(date, -2);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith('The days parameter must be greater or equal than 1!');
  });

  it('should log error if days is a float', () => {
    const date = new Date('2025-01-01');
    const result = addDays(date, 2.5);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith('The days parameter must be an integer!');
  });

  it('should return correct ISO date if valid input is given', () => {
    const date = new Date('2025-01-01T00:00:00.000Z');
    const expected = new Date('2025-01-06T00:00:00.000Z').toISOString();

    const result = addDays(date, 5);
    expect(result).toBe(expected);
  });

  it('should add 1 day correctly', () => {
    const date = new Date('2025-12-30T00:00:00.000Z');
    const expected = new Date('2025-12-31T00:00:00.000Z').toISOString();

    const result = addDays(date, 1);
    expect(result).toBe(expected);
  });
});
