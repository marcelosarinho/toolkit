import addHours from "../../src/date/addHours";
import * as C from "../../src/date/constants";

describe('addHours', () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('should log "Invalid date!" if the date is invalid', () => {
    const invalidDate = new Date('invalid-date');
    expect(invalidDate.toString()).toBe(C.INVALID_DATE_STRING);

    const result = addHours(invalidDate, 5);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith(C.INVALID_DATE_STRING_MESSAGE);
  });

  it('should log error if hours is negative', () => {
    const date = new Date('2025-01-01');
    const result = addHours(date, -2);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith('The hours parameter must be greater or equal than 1!');
  });

  it('should log error if hours is a float', () => {
    const date = new Date('2025-01-01');
    const result = addHours(date, 2.5);
    expect(result).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith('The hours parameter must be an integer!');
  })

  it('should return correct ISO date if valid input is given', () => {
    const date = new Date('2025-01-01T00:00:00.000Z');
    const expected = new Date('2025-01-01T05:00:00.000Z').toISOString();

    const result = addHours(date, 5);
    expect(result).toBe(expected);
  })

  it('should add 1 hour correctly', () => {
    const date = new Date('2025-12-30T00:00:00.000Z');
    const expected = new Date('2025-12-30T01:00:00.000Z').toISOString();

    const result = addHours(date, 1);
    expect(result).toBe(expected);
  })
})