/*
GENERATE PASSWORD FUNCTION
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

// GENERATE PASSWORD TEST

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
AUTHENTICATION FUNCTION
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


/*
COPY PASSWORD TO CLIPBOARD FUNCTION
*/

// CSS code to implement in HTML

<button id="copy-button">Copy to clipboard</button>

// JS Code

const copyButton = document.querySelector("#copy-button");

copyButton.addEventListener("click", function() {
  let textToCopy = window.getSelection().toString();

  // Check if anything was selected
  if (!textToCopy) {
    console.error("No text selected");
    return;
  }

  // Create a hidden textarea element
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  textarea.style.position = "fixed";  // Avoid scrolling to bottom
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  // Copy the text to the clipboard
  try {
    document.execCommand("copy");
    console.log("Copied text: ", textToCopy);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }

  // Remove the textarea element
  document.body.removeChild(textarea);
});



