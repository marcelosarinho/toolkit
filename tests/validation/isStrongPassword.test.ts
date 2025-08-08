import isStrongPassword from "../../src/validation/isStrongPassword";

describe("isStrongPassword", () => {
  let logSpy: jest.Spied<typeof console.log>;

  const commonOptions = {
    minLength: 8,
    maxLength: 20,
    uppercase: 1,
    lowercase: 1,
    digits: 1,
    specialChars: 1,
    noConsecutiveChars: true,
    notInCommonPasswords: true,
  };

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    logSpy.mockRestore();
  });

  it("should return false if password is undefined, null or empty string", () => {
    expect(isStrongPassword(undefined as any, commonOptions)).toBe(false);
    expect(isStrongPassword(null as any, commonOptions)).toBe(false);
    expect(isStrongPassword("", commonOptions)).toBe(false);
  });

  it("should return false if password is not a string", () => {
    expect(isStrongPassword(123 as any, commonOptions)).toBe(false);
    expect(isStrongPassword({} as any, commonOptions)).toBe(false);
    expect(isStrongPassword([] as any, commonOptions)).toBe(false);
  });

  it('should return { "strong": true }} if password is strong, according to the chosen options', () => {
    expect(isStrongPassword("Ex@mple123", commonOptions)).toEqual({ strong: true });
    expect(isStrongPassword("123Example$", commonOptions)).toEqual({ strong: true });
  });

  it(`should return { "reason": "Password must be at least ${commonOptions.minLength} characters long.", "strong": false }`);

  // it("");

  // it("");
})