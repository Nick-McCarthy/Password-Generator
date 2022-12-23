// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password parameter arrays -- may or may not be included in final password
var specialChar = [",", ".", "!", "#", "*", "%"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var alphabetChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var alphabetUpperChar = alphabetChar.map(function (x) {
  return x.toUpperCase();
});

let lengthPrompt = prompt(
  "How long should your password be? Can be bewteen 8 and 128 characters"
);

let numPrompt = prompt(
  "Should your password include numbers? - answer (y / n)",
  ""
);
if (numPrompt == "y") {
  let numInclude = numericChar[Math.floor(Math.random() * myArray.length)];
}

let upperPrompt = prompt(
  "Should your password include upper case letters? - answer (y / n)",
  ""
);
if (upperPrompt == "y") {
  let upperInclude =
    alphabetUpperChar[Math.floor(Math.random() * myArray.length)];
}

let specialPrompt = prompt(
  "Should your password include special characters? - answer (y / n)",
  ""
);
if (specialPrompt == "y") {
  let specialInclude = specialChar[Math.floor(Math.random() * myArray.length)];
}
