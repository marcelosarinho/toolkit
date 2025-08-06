import * as C from '../../src/date/constants';
import formatDate from '../../src/date/formatDate';

describe('formatDate', () => {
  const testDate = new Date('2025-07-31T14:30:45Z'); // ano 4 dígitos
  const testDate5Digit = new Date('+055555-07-31T14:30:45Z'); // ano 5 dígitos
  const testDate6Digit = new Date('+222222-12-25T18:30:45Z'); // ano 6 dígitos

  it('should format "dd/MM/YYYY"', () => {
    expect(formatDate(testDate, 'shortDate')).toBe('31/07/2025');
    expect(formatDate(testDate5Digit, 'shortDate')).toBe('31/07/55555');
    expect(formatDate(testDate6Digit, 'shortDate')).toBe('25/12/222222');
  });

  it('should format "dd/MM/YYYY HH:mm"', () => {
    expect(formatDate(testDate, 'shortDateTime')).toBe('31/07/2025 14:30');
    expect(formatDate(testDate5Digit, 'shortDateTime')).toBe('31/07/55555 14:30');
    expect(formatDate(testDate6Digit, 'shortDateTime')).toBe('25/12/222222 18:30');
  });

  it('should format "dd/MM/YYYY HH:mm:ss"', () => {
    expect(formatDate(testDate, 'fullDateTime')).toBe('31/07/2025 14:30:45');
    expect(formatDate(testDate5Digit, 'fullDateTime')).toBe('31/07/55555 14:30:45');
    expect(formatDate(testDate6Digit, 'fullDateTime')).toBe('25/12/222222 18:30:45');
  });

  it('should format "yyyy-MM-dd"', () => {
    expect(formatDate(testDate, 'isoDate')).toBe('2025-07-31');
    expect(formatDate(testDate5Digit, 'isoDate')).toBe('55555-07-31');
    expect(formatDate(testDate6Digit, 'isoDate')).toBe('222222-12-25');
  });

  it('should format "yyyy-MM-dd HH:mm"', () => {
    expect(formatDate(testDate, 'isoDateTime')).toBe('2025-07-31 14:30');
    expect(formatDate(testDate5Digit, 'isoDateTime')).toBe('55555-07-31 14:30');
    expect(formatDate(testDate6Digit, 'isoDateTime')).toBe('222222-12-25 18:30');
  });

  it('should format "MM/dd/yyyy"', () => {
    expect(formatDate(testDate, 'usDate')).toBe('07/31/2025');
    expect(formatDate(testDate5Digit, 'usDate')).toBe('07/31/55555');
    expect(formatDate(testDate6Digit, 'usDate')).toBe('12/25/222222');
  });

  it('should format "HH:mm"', () => {
    expect(formatDate(testDate, 'time')).toBe('14:30');
    expect(formatDate(testDate5Digit, 'time')).toBe('14:30');
    expect(formatDate(testDate6Digit, 'time')).toBe('18:30');
  });

  it('should format "HH:mm:ss"', () => {
    expect(formatDate(testDate, 'fulltime')).toBe('14:30:45');
    expect(formatDate(testDate5Digit, 'fulltime')).toBe('14:30:45');
    expect(formatDate(testDate6Digit, 'fulltime')).toBe('18:30:45');
  });

  it('should return undefined and log on invalid date', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const invalidDate = new Date('invalid');

    const result = formatDate(invalidDate, 'shortDate');

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(C.INVALID_DATE_STRING_MESSAGE);
    consoleSpy.mockRestore();
  });
});
