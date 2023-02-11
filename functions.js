/*
Using this code from StackOverflow to generate a password
                                                        */

function generatePassword(options) {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";

  let password = "";
  let characterSet = "";

  if (options.lowercase) {
    characterSet += lowercaseLetters;
  }
  if (options.uppercase) {
    characterSet += uppercaseLetters;
  }
  if (options.numbers) {
    characterSet += numbers;
  }
  if (options.symbols) {
    characterSet += symbols;
  }

  for (let i = 0; i < options.length; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return password;
}

const passwordOptions = {
  length: 12,
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true
};

const password = generatePassword(passwordOptions);
console.log("Generated password: ", password);
