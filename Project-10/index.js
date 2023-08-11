let passwordLength = 8;

let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

const passwordRangeInputEl = document.getElementById("passRangeInput");
const passRangeValueEl = document.getElementById("passRangeValue");
const genBtn = document.getElementById("genBtn");
const passwordEl = document.getElementById("password");

const generatePassword = (passLength) => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers = isNumbers ? "0123456789" : "";
    const symbols = isSymbols ? "!@#$%^&*()_+" : "";
  
    const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;
  
    let password = "";
  
    for (let i = 0; i < passLength; i++) {
      const charIndex = Math.floor(Math.random() * passwordChar.length);
      password += passwordChar[charIndex];
    }
    return password;
  };