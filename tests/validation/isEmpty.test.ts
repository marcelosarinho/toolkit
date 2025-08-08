import isEmpty from "../../src/validation/isEmpty";

describe("isEmpty", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return true if value is null, undefined or NaN", () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
  });

  it("should return true if value is 0, false or empty string", () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty("")).toBe(true);
  });

  it("should return true for an empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("should return true for an empty object", () => {
    expect(isEmpty({})).toBe(true);
  });

  it("should return true for -0", () => {
    expect(isEmpty(-0)).toBe(true)
  });

  it("should return false if value is a string isn't empty, a number isn't 0 or true", () => {
    expect(isEmpty("hello")).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(true)).toBe(false);
  });

  it("should return false for strings with only spaces if not trimmed", () => {
    expect(isEmpty("    ")).toBe(false);
  });

  it("should return false for a non-empty array", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it("should return false for an object with properties", () => {
    expect(isEmpty({ key: "value" })).toBe(false);
  });

  it("should return false for a function", () => {
    expect(isEmpty(() => {})).toBe(false);
  });

  it("should return false for a symbol", () => {
    expect(isEmpty(Symbol("sym"))).toBe(false);
  });

  it("should return false for a BigInt", () => {
    expect(isEmpty(BigInt(0))).toBe(false);
  });
});