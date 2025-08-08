import isMIMEType from "../../src/validation/isMIMEType";


describe("isMIMEType", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return false if value is undefined, null or empty string", () => {
    expect(isMIMEType(undefined as any)).toBe(false);
    expect(isMIMEType(null as any)).toBe(false);
    expect(isMIMEType("")).toBe(false);
  });

  it("should return false if value is not a string", () => {
    expect(isMIMEType(123 as any)).toBe(false);
    expect(isMIMEType({} as any)).toBe(false);
    expect(isMIMEType([] as any)).toBe(false);
  });

  it("should return false if value is invalid MIME type", () => {
    expect(isMIMEType("image/unknown")).toBe(false);
    expect(isMIMEType("not/a-mime-type")).toBe(false);
    expect(isMIMEType("abcde")).toBe(false);
  });

  it("should return true if value is valid MIME type", () => {
    expect(isMIMEType("text/html")).toBe(true);
    expect(isMIMEType("image/png")).toBe(true);
    expect(isMIMEType("application/json")).toBe(true);
    expect(isMIMEType("multipart/form-data")).toBe(true);
    expect(isMIMEType("audio/mp4")).toBe(true);
  });

  it("should return true for MIME types with suffixes", () => {
    expect(isMIMEType("application/ld+json")).toBe(true);
    expect(isMIMEType("image/svg+xml")).toBe(true);
  });

  it("should return true for MIME types with parameters", () => {
    expect(isMIMEType("text/html; charset=utf-8")).toBe(true);
    expect(isMIMEType("application/json; version=1.0")).toBe(true);
  });

  it("should handle case-insensitive matching", () => {
    expect(isMIMEType("TEXT/HTML")).toBe(true);
    expect(isMIMEType("Image/PNG")).toBe(true);
  });

  it("should return false for incorrect but similar formats", () => {
    expect(isMIMEType("application//json")).toBe(false);
    expect(isMIMEType("text/")).toBe(false);
    expect(isMIMEType("/plain")).toBe(false);
    expect(isMIMEType("text/plain/extra")).toBe(false);
  });

  it("should return false for MIME types with invalid characters", () => {
    expect(isMIMEType("text/pl@in")).toBe(false);
    expect(isMIMEType("image/png!")).toBe(false);
    expect(isMIMEType("application/<xml>")).toBe(false);
  });

  it("should return true for less common but valid MIME categories", () => {
    expect(isMIMEType("model/gltf+json")).toBe(true);
    expect(isMIMEType("font/woff2")).toBe(true);
  });
});