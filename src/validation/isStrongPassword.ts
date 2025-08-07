import * as C from "./constants";

type PasswordRules = {
  minLength: number,
  maxLength: number,
  uppercase: number,
  lowercase: number,
  digits: number,
  specialChars: number,
  noConsecutiveChars: boolean,
  notInCommonPasswords: boolean,
}

type PasswordReturn = {
  reason?: string,
  strong: boolean,
}

/**
 * Validates whether a given password meets defined strength rules.
 *
 * @param {string} password - The password to validate.
 * @param {PasswordRules} options - Object specifying the rules that determine password strength.
 * @returns {PasswordReturn} An object indicating whether the password is strong, and if not, the reason.
 *
 * @example
 * const rules = {
 *   minLength: 8,
 *   maxLength: 20,
 *   uppercase: 1,
 *   lowercase: 1,
 *   digits: 1,
 *   specialChars: 1,
 *   noConsecutiveChars: true,
 *   notInCommonPasswords: true,
 * };
 *
 * const result = isStrongPassword("Ex@mple123", rules);
 * console.log(result.strong); // true
 */
export default function isStrongPassword(password: string, options: PasswordRules): PasswordReturn {
  const passwordLength = password.length;

  if (passwordLength < options.minLength) {
    return {
      reason: `Password must be at least ${options.minLength} characters long.`,
      strong: false,
    };
  }

  if (passwordLength > options.maxLength) {
    return {
      reason: `Password must not exceed ${options.maxLength} characters.`,
      strong: false,
    }
  }

  if ((password.match(C.UPPERCASE_LETTERS_REGEX)?.length ?? 0) < options.uppercase) {
    return {
      reason: `Password must contain at least ${options.uppercase} uppercase letter(s).`,
      strong: false,
    }
  }

  if ((password.match(C.LOWERCASE_LETTERS_REGEX)?.length ?? 0) < options.lowercase) {
    return {
      reason: `Password must contain at least ${options.lowercase} lowercase letter(s).`,
      strong: false,
    }
  }

  if ((password.match(C.DIGITS_REGEX)?.length ?? 0) < options.digits) {
    return {
      reason: `Password must include at least ${options.digits} numeric digit(s).`,
      strong: false,
    }
  }

  if ((password.match(C.SPECIAL_CHARS_REGEX)?.length ?? 0) < options.specialChars) {
    return {
      reason: `Password must include at least ${options.specialChars} special character(s).`,
      strong: false,
    }
  }

  if (options.noConsecutiveChars && C.CONSECUTIVE_CHARS_REGEX.test(password)) {
    return {
      reason: "Password must not contain consecutive repeated characters.",
      strong: false,
    }
  }

  if (options.notInCommonPasswords && C.COMMON_PASSWORDS.includes(password)) {
    return {
      reason: "This password is too common and easily guessable. Please choose a more unique one.",
      strong: false,
    }
  }

  return {
    strong: true,
  }
}