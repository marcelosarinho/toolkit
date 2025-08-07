import * as C from "./constants";

export default function isUUIDv4(value: string): boolean {  
  return C.UUID_V4_REGEX.test(value);
}