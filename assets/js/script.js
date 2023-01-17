function generatePassword() {
    let passwordLength = document.getElementById("passwordLength").value;
    let includeNumbers = document.getElementById("includeNumbers").checked;
    let includeLowercase = document.getElementById("includeLowercase").checked;
    let includeUppercase = document.getElementById("includeUppercase").checked;
    let includeSymbols = document.getElementById("includeSymbols").checked;

    let password = "";
    let possibleCharacters = "";
    if (includeNumbers) {
        possibleCharacters += "0123456789";
    }
    if (includeLowercase) {
        possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
        possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeSymbols) {
        possibleCharacters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    }

    for (let i = 0; i < passwordLength; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    document.getElementById("password").value = password;
}