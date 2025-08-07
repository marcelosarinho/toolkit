export const SIMPLE_EMAIL_REGEX = /^\S+@\S+\.\S+$/;
export const COMPLEX_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const UPPERCASE_LETTERS_REGEX = /[A-Z]/g;
export const LOWERCASE_LETTERS_REGEX = /[a-z]/g;
export const DIGITS_REGEX = /[0-9]/g;
export const SPECIAL_CHARS_REGEX = /[!@#$%^&*()\-\_=+\[\]{}|;:'",.<>?\/`~]/g;