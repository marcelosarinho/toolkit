import formatDate from '../../src/date/formatDate';
import * as C from '../../src/date/constants';

describe('formatDate', () => {
  const testDate = new Date('2025-07-31T14:30:45Z'); // ano 4 dígitos
  const testDate5Digit = new Date('+055555-07-31T14:30:45Z'); // ano 5 dígitos
  const testDate6Digit = new Date('+222222-12-25T18:30:45Z'); // ano 6 dígitos

  it('should format "dd/MM/YYYY"', () => {
    expect(formatDate(testDate, 'dd/MM/YYYY')).toBe('31/07/2025');
    expect(formatDate(testDate5Digit, 'dd/MM/YYYY')).toBe('31/07/55555');
    expect(formatDate(testDate6Digit, 'dd/MM/YYYY')).toBe('25/12/222222');
  });

  it('should format "dd/MM/YYYY HH:mm"', () => {
    expect(formatDate(testDate, 'dd/MM/YYYY HH:mm')).toBe('31/07/2025 14:30');
    expect(formatDate(testDate5Digit, 'dd/MM/YYYY HH:mm')).toBe('31/07/55555 14:30');
    expect(formatDate(testDate6Digit, 'dd/MM/YYYY HH:mm')).toBe('25/12/222222 18:30');
  });

  it('should format "dd/MM/YYYY HH:mm:ss"', () => {
    expect(formatDate(testDate, 'dd/MM/YYYY HH:mm:ss')).toBe('31/07/2025 14:30:45');
    expect(formatDate(testDate5Digit, 'dd/MM/YYYY HH:mm:ss')).toBe('31/07/55555 14:30:45');
    expect(formatDate(testDate6Digit, 'dd/MM/YYYY HH:mm:ss')).toBe('25/12/222222 18:30:45');
  });

  it('should format "yyyy-MM-dd"', () => {
    expect(formatDate(testDate, 'yyyy-MM-dd')).toBe('2025-07-31');
    expect(formatDate(testDate5Digit, 'yyyy-MM-dd')).toBe('55555-07-31');
    expect(formatDate(testDate6Digit, 'yyyy-MM-dd')).toBe('222222-12-25');
  });

  it('should format "yyyy-MM-dd HH:mm"', () => {
    expect(formatDate(testDate, 'yyyy-MM-dd HH:mm')).toBe('2025-07-31 14:30');
    expect(formatDate(testDate5Digit, 'yyyy-MM-dd HH:mm')).toBe('55555-07-31 14:30');
    expect(formatDate(testDate6Digit, 'yyyy-MM-dd HH:mm')).toBe('222222-12-25 18:30');
  });

  it('should format "MM/dd/yyyy"', () => {
    expect(formatDate(testDate, 'MM/dd/yyyy')).toBe('07/31/2025');
    expect(formatDate(testDate5Digit, 'MM/dd/yyyy')).toBe('07/31/55555');
    expect(formatDate(testDate6Digit, 'MM/dd/yyyy')).toBe('12/25/222222');
  });

  it('should return undefined and log on invalid date', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const invalidDate = new Date('invalid');

    const result = formatDate(invalidDate, 'dd/MM/YYYY');

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid date!');
    consoleSpy.mockRestore();
  });
});
