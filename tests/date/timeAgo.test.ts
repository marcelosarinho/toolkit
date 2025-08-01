import * as C from "../../src/date/constants";
import timeAgo from "../../src/date/timeAgo";

describe('timeAgo', () => {
  const now = new Date();

  it('should return "a few seconds ago" for less than 60 seconds', () => {
    const date = new Date(now.getTime() - 20 * 1000); // 20 seconds ago
    expect(timeAgo(date)).toBe('a few seconds ago');
  });

  it('should return minutes ago', () => {
    const date = new Date(now.getTime() - 5 * 60 * 1000); // 5 minutes ago
    expect(timeAgo(date)).toBe('5 minutes ago');
  });

  it('should return 1 minute ago (singular)', () => {
    const date = new Date(now.getTime() - 60 * 1000); // 1 minute ago
    expect(timeAgo(date)).toBe('1 minute ago');
  });

  it('should return hours ago', () => {
    const date = new Date(now.getTime() - 3 * 60 * 60 * 1000); // 3 hours ago
    expect(timeAgo(date)).toBe('3 hours ago');
  });

  it('should return 1 hour ago (singular)', () => {
    const date = new Date(now.getTime() - 60 * 60 * 1000); // 1 hour ago
    expect(timeAgo(date)).toBe('1 hour ago');
  });

  it('should return days ago', () => {
    const date = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000); // 10 days ago
    expect(timeAgo(date)).toBe('10 days ago');
  });

  it('should return months ago', () => {
    const date = new Date(now.getTime() - 2 * 30 * 24 * 60 * 60 * 1000); // ~2 months ago
    expect(timeAgo(date)).toBe('2 months ago');
  });

  it('should return 1 month ago (singular)', () => {
    const date = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // ~1 month ago
    expect(timeAgo(date)).toBe('1 month ago');
  });

  it('should return years ago', () => {
    const date = new Date(now.getTime() - 3 * 365 * 24 * 60 * 60 * 1000); // ~3 years ago
    expect(timeAgo(date)).toBe('3 years ago');
  });

  it('should return 1 year ago (singular)', () => {
    const date = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000); // ~1 year ago
    expect(timeAgo(date)).toBe('1 year ago');
  });

  it('should handle invalid date string', () => {
    const invalidDate = new Date(C.INVALID_DATE_STRING);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    expect(timeAgo(invalidDate)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid date!');
    consoleSpy.mockRestore();
  });
});
