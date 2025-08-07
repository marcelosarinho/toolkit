import isCreditCard from "../../src/validation/isCreditCard";

describe("isCreditCard", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return false if string have non-digit characters", () => {
    expect(isCreditCard("4242 4242 abcd abcd")).toBe(false);
    expect(isCreditCard("abcd-abcd-abcd-abcd")).toBe(false);
    expect(isCreditCard("abcdefghijklmnop")).toBe(false);
  });

  it("should return false if the credit card number is invalid", () => {
    expect(isCreditCard("1234 1234 1234 1234")).toBe(false);
    expect(isCreditCard("1234-1234-1234-1234")).toBe(false);
    expect(isCreditCard("4552 7204 1234 5678")).toBe(false);
    expect(isCreditCard("4552720412345678")).toBe(false);
  });

  it("should return false for empty or nullish values", () => {
    expect(isCreditCard("")).toBe(false);
    expect(isCreditCard("   ")).toBe(false);
    expect(isCreditCard(null as any)).toBe(false);
    expect(isCreditCard(undefined as any)).toBe(false);
  });

  it("should return true for inconsistent separators", () => {
    expect(isCreditCard("4242-4242 4242-4242")).toBe(true);
    expect(isCreditCard("4242 4242-4242 4242")).toBe(true);
  });

  it("should return false for numbers with invalid lengths", () => {
    expect(isCreditCard("4242")).toBe(false);
    expect(isCreditCard("42424242424242424242")).toBe(false);
  });

  it("should return true for valid card with irregular spacing", () => {
    expect(isCreditCard("4242  4242   4242    4242")).toBe(true);
  });

  it("should return true for input with special characters", () => {
    expect(isCreditCard("4242.4242.4242.4242")).toBe(true);
    expect(isCreditCard("4242/4242/4242/4242")).toBe(true);
  });

  it("should return true if the credit card number is valid", () => {
    expect(isCreditCard("4242424242424242")).toBe(true);
    expect(isCreditCard("4242-4242-4242-4242")).toBe(true);
    expect(isCreditCard("4000056655665556")).toBe(true);
    expect(isCreditCard("4000 0566 5566 5556")).toBe(true);
  });
})