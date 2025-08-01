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

  it('should log "Invalid date!" if the date is invalid', () => {
    const invalidDate = new Date('invalid-date');
    expect(invalidDate.toString()).toBe(C.INVALID_DATE_STRING);

    addDays(invalidDate, 5);
    expect(logSpy).toHaveBeenCalledWith('Invalid date!');
  });

  it('should log error if days is negative', () => {
    const date = new Date('2025-01-01');
    addDays(date, -2);
    expect(logSpy).toHaveBeenCalledWith('The days parameter must be greater or equal than 1!');
  });

  it('should log error if days is a float', () => {
    const date = new Date('2025-01-01');
    addDays(date, 2.5);
    expect(logSpy).toHaveBeenCalledWith('The days parameter must be an integer!');
  });

  it('should log correct ISO date if valid input is given', () => {
    const date = new Date('2025-01-01T00:00:00.000Z');
    const expected = new Date('2025-01-06T00:00:00.000Z').toISOString();

    addDays(date, 5);
    expect(logSpy).toHaveBeenCalledWith(expected);
  });

  it('should add 1 day correctly', () => {
    const date = new Date('2025-12-30T00:00:00.000Z');
    const expected = new Date('2025-12-31T00:00:00.000Z').toISOString();

    addDays(date, 1);
    expect(logSpy).toHaveBeenCalledWith(expected);
  });
});
