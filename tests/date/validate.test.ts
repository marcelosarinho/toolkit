import * as V from "../../src/date/validate";
import * as C from "../../src/date/constants";

describe("validate", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  describe("isValidDate", () => {
    it("should return true for a valid date", () => {
      expect(V.isValidDate(new Date("2025-01-01"))).toBe(true);
    });

    it("should return false for an invalid date", () => {
      const invalidDate = new Date('invalid-date');
      expect(invalidDate.toString()).toBe(C.INVALID_DATE_STRING);
      expect(V.isValidDate(invalidDate)).toBe(false);
    });
  });

  describe("isInteger", () => {
    it("should return true for integer numbers", () => {
      expect(V.isInteger(10)).toBe(true);
      expect(V.isInteger(0)).toBe(true);
      expect(V.isInteger(-5)).toBe(true);
    });

    it("should return false for decimal numbers", () => {
      expect(V.isInteger(3.14)).toBe(false);
      expect(V.isInteger(-2.5)).toBe(false);
    });
  });

  describe("isLessThanOne", () => {
    it("should return true for numbers less than 1", () => {
      expect(V.isLessThanOne(0)).toBe(true);
      expect(V.isLessThanOne(-1)).toBe(true);
    });

    it("should return false for numbers equal or greater than 1", () => {
      expect(V.isLessThanOne(1)).toBe(false);
      expect(V.isLessThanOne(2)).toBe(false);
    });
  });

  describe("isWeekend", () => {
    it("should return true for Saturday and Sunday", () => {
      expect(V.isWeekend(new Date("2025-08-02"))).toBe(true);
      expect(V.isWeekend(new Date("2025-08-03"))).toBe(true);
    });

    it("should return false for weekdays", () => {
      expect(V.isWeekend(new Date("2025-08-05"))).toBe(false);
    });
  });

  describe("isWeekday", () => {
    it("should return true for weekdays", () => {
      expect(V.isWeekday(new Date("2025-08-05"))).toBe(true);
    });

    it("should return false for weekends", () => {
      expect(V.isWeekday(new Date("2025-08-03"))).toBe(false);
    })
  });

  describe("isToday", () => {
    it("should return true for today", () => {
      const today = new Date();
      const testDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
      expect(V.isToday(testDate)).toBe(true);
    });

    it("should return false for other days", () => {
      const yesterday = new Date(Date.now() - 86400000);
      expect(V.isToday(yesterday)).toBe(false);
    });
  })

  describe("isSameDay", () => {
    it("should return true for the same day (local time)", () => {
      const date1 = new Date("2025-08-06T10:00:00");
      const date2 = new Date("2025-08-06T23:59:59");
      expect(V.isSameDay(date1, date2)).toBe(true);
    });

    it("should return true for the same day (UTC)", () => {
      const date1 = new Date("2025-08-06T00:00:00Z");
      const date2 = new Date("2025-08-06T23:59:59Z");
      expect(V.isSameDay(date1, date2, { useUTC: true })).toBe(true);
    });

    it("should return false for different days", () => {
      const date1 = new Date("2025-08-06");
      const date2 = new Date("2025-08-07");
      expect(V.isSameDay(date1, date2)).toBe(false);
    });

    it("should log and return undefined if first date is invalid", () => {
      const invalid = new Date('invalid-date');
      const valid = new Date("2025-08-06");

      const result = V.isSameDay(invalid, valid);
      expect(result).toBeUndefined();
      expect(logSpy).toHaveBeenCalledWith("The first date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD");
    });

    it("should log and return undefined if second date is invalid", () => {
      const valid = new Date("2025-08-06");
      const invalid = new Date('invalid-date');

      const result = V.isSameDay(valid, invalid);
      expect(result).toBeUndefined();
      expect(logSpy).toHaveBeenCalledWith("The second date is invalid! Please provide a date in these formats: YYYY-MM-DDTHH:mm:ss.sssZ, YYYY, YYYY-MM, YYYY-MM-DD");
    });
  });

  describe("isPast", () => {
    it("should return true for a past date", () => {
      expect(V.isPast(new Date("2000-01-01"))).toBe(true);
    });

    it("should return false for a future date", () => {
      const future = new Date();
      future.setFullYear(future.getFullYear() + 1);
      expect(V.isPast(future)).toBe(false);
    });
  });

  describe("isFuture", () => {
    it("should return true for a future date", () => {
      const future = new Date();
      future.setFullYear(future.getFullYear() + 1);
      expect(V.isFuture(future)).toBe(true);
    });

    it("should return false for a past date", () => {
      expect(V.isFuture(new Date("2000-01-01"))).toBe(false);
    });
  });
})