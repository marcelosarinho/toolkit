export const SIMPLE_EMAIL_REGEX = /^\S+@\S+\.\S+$/;
export const COMPLEX_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const UPPERCASE_LETTERS_REGEX = /[A-Z]/g;
export const LOWERCASE_LETTERS_REGEX = /[a-z]/g;
export const DIGITS_REGEX = /[0-9]/g;
export const SPECIAL_CHARS_REGEX = /[!@#$%^&*()\-\_=+\[\]{}|;:'",.<>?\/`~]/g;
export const CONSECUTIVE_CHARS_REGEX = /(.)\1+/gi;
export const HEX_COLOR_REGEX = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

export const COMMON_PASSWORDS = [
  '123456',
  '123456789',
  '12345678',
  'password',
  'qwerty123',
  'qwerty1',
  '111111',
  '12345',
  'secret',
  '123123',
  '1234567890',
  '1234567',
  '000000',
  'qwerty',
  'abc123',
  'password1',
  'iloveyou',
  '11111111',
  'dragon',
  'monkey',
]