import isHexColor from "../../src/validation/isHexColor";

describe("isHexColor", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return false if value is null, undefined or empty string", () => {
    expect(isHexColor(undefined as any)).toBe(false);
    expect(isHexColor(null as any)).toBe(false);
    expect(isHexColor("")).toBe(false);
  });

  it("should return false if hex value contains only 1 character", () => {
    expect(isHexColor("#a")).toBe(false);
    expect(isHexColor("#1")).toBe(false);
  });

  it("should return false if hex value contains only 2 characters", () => {
    expect(isHexColor("#aa")).toBe(false);
    expect(isHexColor("#11")).toBe(false);
  });

  it("should return false if hex value contains 5 characters", () => {
    expect(isHexColor("#aaaaa")).toBe(false);
    expect(isHexColor("#11111")).toBe(false);
  });

  it("should return false if hex value contains 7 characters", () => {
    expect(isHexColor("#aaaaaaa")).toBe(false);
    expect(isHexColor("#1111111")).toBe(false);
  });

  it("should return false if hex value doesn't contains characters between a-z and 0-9", () => {
    expect(isHexColor("#gggggg")).toBe(false);
    expect(isHexColor("#jj")).toBe(false);
  });

  it("should handle hex values case-insensitively", () => {
    expect(isHexColor("#FFF")).toBe(true);
    expect(isHexColor("#FfFfFf")).toBe(true);
    expect(isHexColor("#ffff")).toBe(true);
    expect(isHexColor("#GGGggg")).toBe(false);
  });

  it("should return true if hex value is valid", () => {
    expect(isHexColor("#000000")).toBe(true);
    expect(isHexColor("#000")).toBe(true);
    expect(isHexColor("#123456")).toBe(true);
  });

  it("should return false if hex value does not start with #", () => {
    expect(isHexColor("123456")).toBe(false);
    expect(isHexColor("fff")).toBe(false);
    expect(isHexColor("ABCDEF")).toBe(false);
  });

  it("should return false if hex value contains leading or trailing spaces", () => {
    expect(isHexColor(" #fff")).toBe(false);
    expect(isHexColor("#fff ")).toBe(false);
    expect(isHexColor("  #123456  ")).toBe(false);
  });

  it("should return false for non-string inputs", () => {
    expect(isHexColor(123456 as any)).toBe(false);
    expect(isHexColor({} as any)).toBe(false);
    expect(isHexColor([] as any)).toBe(false);
    expect(isHexColor(true as any)).toBe(false);
  });

  it("should return true for 4-character hex values (RGBA shorthand)", () => {
    expect(isHexColor("#abcd")).toBe(true);
  });

  it("should return true for 8-character hex values (RGBA full)", () => {
    expect(isHexColor("#aabbccdd")).toBe(true);
  });

  it("should return false if hex value contains invalid characters mixed with valid ones", () => {
    expect(isHexColor("#12g456")).toBe(false);
    expect(isHexColor("#12345z")).toBe(false);
    expect(isHexColor("#12 456")).toBe(false);
  });
});