import isEmail from "../../src/validation/isEmail";

describe("isEmail", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return false if email is invalid, complex option is false", () => {
    expect(isEmail("user@example")).toBe(false);
    expect(isEmail("useremail.com")).toBe(false);
    expect(isEmail("user example.com")).toBe(false);
  });

  it("should return false if email is invalid, complex option is true", () => {
    expect(isEmail("user@domain", { complex: true })).toBe(false);
    expect(isEmail("user@@domain.com", { complex: true })).toBe(false);
  });

  it("should return false if email is null, undefined or empty string", () => {
    expect(isEmail("")).toBe(false);
    expect(isEmail(undefined as any)).toBe(false);
    expect(isEmail(null as any)).toBe(false);
  });

  it("should trim spaces or reject emails with spaces", () => {
    expect(isEmail("  user@example.com  ")).toBe(false);
    expect(isEmail("user @example.com")).toBe(false);
  });

  it("should allow emails with plus sign and dash", () => {
    expect(isEmail("user+tag@example.com")).toBe(true);
    expect(isEmail("user-name@example.co.uk")).toBe(true);
  });

  it("should handle internationalized domain names if supported", () => {
    expect(isEmail("用户@例子.公司")).toBe(true);
  });

  it("should allow longer TLDs", () => {
    expect(isEmail("contact@example.technology")).toBe(true);
  });

  it("should validate multiples dots correctly", () => {
    expect(isEmail("first.last@example.com")).toBe(true);
    expect(isEmail("first..last@example.com")).toBe(true);
  });

  it("should reject invalid characters", () => {
    expect(isEmail("user<>@example.com", { complex: true }));
    expect(isEmail("user@exa mple.com", { complex: true }));
  });

  it("should reject missing parts", () => {
    expect(isEmail("@example.com")).toBe(false);
    expect(isEmail("user@")).toBe(false);
  });

  it("should return true if email is valid, complex option is false", () => {
    expect(isEmail("user@email.com")).toBe(true);
    expect(isEmail("another_user@email.br")).toBe(true);
  });

  it("should return true if email is valid, complex option is true", () => {
    expect(isEmail("user.user@example.com", { complex: true })).toBe(true);
    expect(isEmail("user_123@example.org.br", { complex: true })).toBe(true);
  });
})