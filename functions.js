// Using this code from StackOverflow to generate a password
// Still not functional

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

console.log(generatePassword(16))
