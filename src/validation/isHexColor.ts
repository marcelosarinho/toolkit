import * as C from "./constants";

export default function isHexColor(value: string) {
  return C.HEX_COLOR_REGEX.test(value);
}