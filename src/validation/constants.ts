export const SIMPLE_EMAIL_REGEX = /^\S+@\S+\.\S+$/;
export const COMPLEX_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const UPPERCASE_LETTERS_REGEX = /[A-Z]/g;
export const LOWERCASE_LETTERS_REGEX = /[a-z]/g;
export const DIGITS_REGEX = /[0-9]/g;
export const SPECIAL_CHARS_REGEX = /[!@#$%^&*()\-\_=+\[\]{}|;:'",.<>?\/`~]/g;
export const CONSECUTIVE_CHARS_REGEX = /(.)\1+/gi;
export const HEX_COLOR_REGEX = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
export const SLUG_REGEX = /^[0-9a-z]+(?:-[0-9a-z]+)*$/;
export const FILE_REGEX = /[a-z]+$/i;

export const COMMON_PASSWORDS = [
  '123456', '123456789', '12345678', 'password',
  'qwerty123', 'qwerty1', '111111', '12345', 'secret',
  '123123', '1234567890', '1234567', '000000', 'qwerty',
  'abc123', 'password1', 'iloveyou', '11111111', 'dragon',
  'monkey',
];

export const MIME_TYPES = [
  "text/plain",
  "text/html",
  "text/css",
  "text/javascript",
  "text/csv",
  "text/xml",
  "text/markdown",
  "text/yaml",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/svg+xml",
  "image/bmp",
  "image/tiff",
  "image/x-icon",
  "audio/mpeg",
  "audio/wav",
  "audio/ogg",
  "audio/webm",
  "audio/flac",
  "audio/aac",
  "audio/mp4",
  "audio/3gpp",
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/x-msvideo",
  "video/x-flv",
  "video/mpeg",
  "video/3gpp",
  "application/json",
  "application/xml",
  "application/pdf",
  "application/zip",
  "application/gzip",
  "application/x-www-form-urlencoded",
  "application/octet-stream",
  "application/javascript",
  "application/ld+json",
  "application/vnd.api+json",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "multipart/form-data",
  "multipart/mixed",
  "multipart/related",
  "multipart/alternative",
  "font/woff",
  "font/woff2",
  "font/ttf",
  "font/otf",
  "model/3mf",
  "model/gltf+json",
  "model/obj",
  "model/stl",
  "message/rfc822",
  "message/global",
  "haptics/metadata",
  "haptics/stream",
  "example/example"
];