import isSlug from "../../src/validation/isSlug";

describe("isSlug", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return false if value is undefined, null or empty string", () => {
    expect(isSlug(undefined as any)).toBe(false);
    expect(isSlug(null as any)).toBe(false);
    expect(isSlug("")).toBe(false);
  });

  it("should return false if value is not a string", () => {
    expect(isSlug(123 as any)).toBe(false);
    expect(isSlug({} as any)).toBe(false);
    expect(isSlug([] as any)).toBe(false);
  });

  it("should return false if value is not a valid slug", () => {
    expect(isSlug("Valid")).toBe(false);
    expect(isSlug("-invalid-start")).toBe(false);
    expect(isSlug("invalid--double")).toBe(false);
    expect(isSlug("my_awesome_post")).toBe(false);
  });

  it("should return true if value is a valid slug", () => {
    expect(isSlug("my-first-post")).toBe(true);
    expect(isSlug("another-post")).toBe(true);
    expect(isSlug("post")).toBe(true);
  });

  it("should handle very long slugs", () => {
    const longSlug = "a".repeat(1000);
    expect(isSlug(longSlug)).toBe(true);
  });

  it("should handle slugs with one character", () => {
    expect(isSlug("a")).toBe(true);
    expect(isSlug("-")).toBe(false);
  });

  it("should reject slugs with uppercase letters", () => {
    expect(isSlug("My-Slug")).toBe(false);
  });

  it("should reject slugs with spaces or special characters", () => {
    expect(isSlug("my slug")).toBe(false);
    expect(isSlug("my@slug")).toBe(false);
    expect(isSlug("my.slug")).toBe(false);
  });

  it("should reject slugs starting or ending with hyphen", () => {
    expect(isSlug("-start")).toBe(false);
    expect(isSlug("end-")).toBe(false);
  });

  it("should reject slugs with consecutive hyphens", () => {
    expect(isSlug("two--hyphens")).toBe(false);
  });

  it("should allow numbers inside slugs", () => {
    expect(isSlug("post-123")).toBe(true);
    expect(isSlug("123")).toBe(true);
    expect(isSlug("post123-post")).toBe(true);
  });

  it("should reject slugs with leading or trailing spaces", () => {
    expect(isSlug(" my-slug")).toBe(false);
    expect(isSlug("my-slug ")).toBe(false);
  });

  it("should be case-sensitive", () => {
    expect(isSlug("MY-SLUG")).toBe(false);
    expect(isSlug("my-slug")).toBe(true);
  });

  it("should reject objects with toString returning a valid slug", () => {
    expect(isSlug({ toString: () => "valid-slug" } as any)).toBe(false);
  });
})