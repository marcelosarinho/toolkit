import * as C from "./constants";

export default function isEmail(
  email: string,
  options?: { complex?: boolean }
) {
  const isComplex = options?.complex ?? false;

  if (isComplex) {
    return C.COMPLEX_EMAIL_REGEX.test(email);
  }

  return C.SIMPLE_EMAIL_REGEX.test(email);
}