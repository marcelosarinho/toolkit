import * as C from "./constants";

export default function isMimeType(value: string): boolean {
  return C.MIME_TYPES.includes(value);
}