import isInRange from "../../src/validation/isInRange";

describe("isInRange", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return false if number is not in range", () => {
    expect(isInRange(1, 5, 10)).toBe(false);
    expect(isInRange(2, 5, 7)).toBe(false);
    expect(isInRange(35, 10, 20)).toBe(false);
    expect(isInRange(-5, -2, 2)).toBe(false);
    expect(isInRange(-5.5, -2, 2)).toBe(false);
    expect(isInRange(3.789, 4, 6)).toBe(false);
  });

  it("should return true if number is in range", () => {
    expect(isInRange(8, 5, 10)).toBe(true);
    expect(isInRange(6, 5, 7)).toBe(true);
    expect(isInRange(15, 10, 20)).toBe(true);
    expect(isInRange(-1, -2, 2)).toBe(true);
    expect(isInRange(-1.5, -2, 2)).toBe(true);
    expect(isInRange(2.65, 0, 5)).toBe(true);
  });

  it("should return false if number is undefined, null, NaN or empty string", () => {
    expect(isInRange(undefined as any, 5, 10)).toBe(false);
    expect(isInRange(null as any, 10, 15)).toBe(false);
    expect(isInRange(NaN, 2, 5)).toBe(false);
    expect(isInRange("" as any, 30, 40)).toBe(false);
  });

  it("should return true if number is exactly at the range boundaries", () => {
    expect(isInRange(5, 5, 10)).toBe(true);
    expect(isInRange(10, 5, 10)).toBe(true);
  });

  it("should handle inverted range limits gracefully", () => {
    expect(isInRange(7, 10, 5)).toBe(false);
    expect(isInRange(10, 10, 5)).toBe(false);
  });

  it("should handle extreme numeric values", () => {
    expect(isInRange(Number.MAX_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isInRange(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0)).toBe(true);
    expect(isInRange(Infinity, 0, 10)).toBe(false);
    expect(isInRange(-Infinity, -10, 0)).toBe(false);
  });

  it("should return false for non-numeric types", () => {
    expect(isInRange("5" as any, 0, 10)).toBe(false);
    expect(isInRange(true as any, 0, 10)).toBe(false);
    expect(isInRange([] as any, 0, 10)).toBe(false);
    expect(isInRange({} as any, 0, 10)).toBe(false);
  });

  it("should return false if min or max are not numbers", () => {
    expect(isInRange(5, "0" as any, 10)).toBe(false);
    expect(isInRange(5, 0, null as any)).toBe(false);
  });
});