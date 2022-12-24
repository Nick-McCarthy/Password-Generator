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
var alphabetChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var alphabetUpperChar = alphabetChar.map(function (x) {return x.toUpperCase();});

function generatePassword(){
  // ask for length
  var lengthPrompt = prompt("How long should your password be? Can be bewteen 8 and 128 characters", ""); 
  
  if (lengthPrompt == isNaN || lengthPrompt > 128 || lengthPrompt < 8) {
    alert("Please insert a valid answer");
    generatePassword()
    return
  }
  console.log(lengthPrompt)

  // should it include number
  let numPrompt = confirm("Should your password include numbers? - answer (confirm for yes / cancel for no)","");
  if (numPrompt === true) {
    var numInclude = numericChar[Math.floor(Math.random() * numericChar.length)];
  }
  console.log(numInclude)

  // should it include upper
  let upperPrompt = confirm("Should your password include upper case letters? - answer (confirm for yes / cancel for no)","");
  if (upperPrompt === true) {
    var upperInclude = alphabetUpperChar[Math.floor(Math.random() * alphabetUpperChar.length)];
  }
  console.log(upperInclude);

  // should it include special character
  let specialPrompt = confirm("Should your password include special characters? - answer (confirm for yes / cancel for no)","");
  if (specialPrompt === true) {
    var specialInclude = specialChar[Math.floor(Math.random() * specialChar.length)];
  }
  console.log(specialInclude);

  //create empty array of length n
  let tempArray = Array.apply(null, Array(lengthPrompt -1)).map(function () {})

  //insert random lowercase
  for (i=0; i in tempArray; i++) {
    tempArray[i] = alphabetChar[Math.floor(Math.random()*alphabetChar.length)];
  }
  //overwrite with optional includes
  tempArray[Math.floor(Math.random()*tempArray.length)] = specialInclude
  tempArray[Math.floor(Math.random()*tempArray.length)] = upperInclude
  tempArray[Math.floor(Math.random()*tempArray.length)] = numInclude

  var passArray2 = tempArray.join("")

  return passArray2
}