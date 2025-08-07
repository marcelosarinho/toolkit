import * as C from "./constants";

type PasswordRules = {
  minLength: number,
  maxLength: number,
  uppercase: number,
  lowercase: number,
  digits: number,
  specialChars: number,
  noRepeatedChars: boolean,
  notInCommonPasswords: boolean,
}

export default function isStrongPassword(password: string, options: PasswordRules) {
  const passwordLength = password.length;

  if (passwordLength < options.minLength) {
    console.log('The password length is less than the minimum length!');
    return false;
  }

  if (passwordLength > options.maxLength) {
    console.log('The password length is graeter than the maximum length!');
    return false;
  }

  if ((password.match(C.UPPERCASE_LETTERS_REGEX)?.length ?? 0) < options.uppercase) {
    console.log("The password's number of uppercased letters is less than the minimum!");
    return false;
  }

  if ((password.match(C.LOWERCASE_LETTERS_REGEX)?.length ?? 0) < options.lowercase) {
    console.log("The password's number of lowercased letters is less than the minimum!");
    return false;
  }
}

isStrongPassword('oi', {
  minLength: 2,
  maxLength: 10,
  uppercase: 1,
  lowercase: 1,
  digits: 1,
  specialChars: 1,
  noRepeatedChars: true,
  notInCommonPasswords: true,
});