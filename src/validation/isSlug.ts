import * as C from "./constants";

export default function isSlug(value: string) {
  return C.SLUG_REGEX.test(value);
}