import * as C from "./constants";

type CommonFileExtension =
  | 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx'
  | 'txt' | 'csv' | 'rtf' | 'odt' | 'ods' | 'odp' | 'md'
  | 'jpg' | 'jpeg' | 'png' | 'gif' | 'bmp' | 'webp' | 'tiff' | 'svg' | 'ico' | 'heic'
  | 'mp3' | 'wav' | 'ogg' | 'm4a' | 'flac' | 'aac'
  | 'mp4' | 'mov' | 'avi' | 'wmv' | 'flv' | 'mkv' | 'webm'
  | 'zip' | 'rar' | '7z' | 'tar' | 'gz' | 'bz2'
  | 'js' | 'ts' | 'json' | 'html' | 'css' | 'scss' | 'xml' | 'yml' | 'yaml'
  | 'sh' | 'bat' | 'php' | 'py' | 'java' | 'c' | 'cpp' | 'rs' | 'go'
  | 'exe' | 'apk' | 'iso' | 'dll' | 'db' | 'log' | 'bak';

  /**
 * Checks whether a given file name or path has an allowed file extension.
 *
 * @param {string} value - The file name or path to validate.
 * @param {CommonFileExtension[]} allowed - An array of allowed file extensions.
 * @returns {boolean} `true` if the file has a valid and allowed extension, otherwise `false`.
 *
 * The function uses a regular expression (`C.FILE_REGEX`) to extract the file extension from the input string.
 * It then checks if the extracted extension matches one of the allowed extensions provided in the `allowed` array.
 *
 * @example
 * isFileExtension("document.pdf", ["pdf", "docx"]);        // true
 * isFileExtension("image.jpeg", ["png", "webp"]);          // false
 * isFileExtension("script.sh", ["sh", "bat"]);             // true
 * isFileExtension("archive.unknown", ["zip", "rar"]);      // false
 */
export default function isFileExtension(
  value: string,
  allowed: CommonFileExtension[]
): boolean {
  if (!value || typeof value !== "string") {
    return false;
  }

  const match = value.match(C.FILE_REGEX);

  if (!match) {
    return false;
  }

  const extensionWithoutDot = match[0].replace('.', '');
  const extension = extensionWithoutDot.toLowerCase() as CommonFileExtension;

  return allowed.includes(extension);
}