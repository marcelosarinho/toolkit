import isFileExtension from "../../src/validation/isFileExtension";

describe("isFileExtension", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return false if an file extension isn't on allowed extensions", () => {
    expect(isFileExtension("file.pdf", ["png", "jpeg", "jpg"])).toBe(false);
    expect(isFileExtension("file.gif", ["png", "jpeg", "jpg"])).toBe(false);
    expect(isFileExtension("file.abc", ["png", "jpeg", "jpg"])).toBe(false);
  });

  it("should return false if an file doesn't have extension", () => {
    expect(isFileExtension("file", ["png", "jpg"])).toBe(false);
    expect(isFileExtension("abcde" , ["png", "jpg"])).toBe(false);
  });

  it("should return false if filename is an extension", () => {
    expect(isFileExtension("png" , ["png", "jpg"])).toBe(false);
    expect(isFileExtension("jpg" , ["png", "jpg"])).toBe(false);
  });

  it("should return false if an file is null, undefined or empty string", () => {
    expect(isFileExtension(null as any, ["pdf", "png"])).toBe(false);
    expect(isFileExtension(undefined as any, ["pdf", "png"])).toBe(false);
    expect(isFileExtension("", ["pdf", "png"])).toBe(false);
  });

  it("should return true if an file extension is on allowed extension", () => {
    expect(isFileExtension("file.png", ["png", "jpeg", "pdf"])).toBe(true);
    expect(isFileExtension("file.jpeg", ["png", "jpeg", "pdf"])).toBe(true);
    expect(isFileExtension("file.pdf", ["png", "jpeg", "pdf"])).toBe(true);
  });

  it("should handle file extensions case-insensitively", () => {
    expect(isFileExtension("file.PNG", ["png", "jpeg", "pdf"])).toBe(true);
    expect(isFileExtension("file.JpEg", ["png", "jpeg", "pdf"])).toBe(true);
    expect(isFileExtension("file.PdF", ["png", "jpeg", "pdf"])).toBe(true);
    expect(isFileExtension("file.PDF", ["pdf"])).toBe(true);
    expect(isFileExtension("file.PDF", ["png", "jpeg"])).toBe(false);
  });

  it("should correctly handle filenames with multiple dots", () => {
    expect(isFileExtension("archive.tar.gz", ["gz", "zip"])).toBe(true);
    expect(isFileExtension("photo.final.jpg", ["jpg", "jpeg"])).toBe(true);
    expect(isFileExtension("document.v1.pdf", ["pdf"])).toBe(true);
    expect(isFileExtension("file.name.withoutext", ["txt"])).toBe(false);
  });

  it("should handle filenames with spaces and special characters", () => {
    expect(isFileExtension("my file.jpeg", ["jpeg"])).toBe(true);
    expect(isFileExtension("strange#file$.png", ["png"])).toBe(true);
    expect(isFileExtension("noextension ", ["png"])).toBe(false);
  });

  it("should return false if allowed extensions array is empty", () => {
    expect(isFileExtension("file.png", [])).toBe(false);
  });

  it("should return false for non-string filename inputs", () => {
    expect(isFileExtension(12345 as any, ["png"])).toBe(false);
    expect(isFileExtension({} as any, ["png"])).toBe(false);
    expect(isFileExtension([] as any, ["png"])).toBe(false);
  });
});