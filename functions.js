// Using this function from Tiny App to modify into password generator

const generateRandomString = () => {
  let string = "";
  const cipher = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let i = 0;
  while (i < 6) {
    string += cipher.charAt(Math.floor(Math.random() * cipher.length));
    i++;
  }
  return string
};
