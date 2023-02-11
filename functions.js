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


/*
Authentication function
*/

function authenticate(username, password) {
  // A hardcoded set of valid credentials for demonstration purposes
  const validCredentials = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  // Check if the provided credentials match any in the set of valid credentials
  for (let i = 0; i < validCredentials.length; i++) {
    if (username === validCredentials[i].username && password === validCredentials[i].password) {
      return true;
    }
  }

  // If no match was found, return false
  return false;
}
