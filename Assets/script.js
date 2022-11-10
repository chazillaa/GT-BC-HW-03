// Function to generate password within the write password function
function generatePassword() {

// Initial prompt to select length of password between 8 and 128
  var selectedLength = prompt(`Select a length of at least 8 characters and no more than 128 characters.`)

// Creates an number usint the prompt that will be stored as a variable for the password length
  var passwordLength = parseInt(selectedLength)

// If the input is not a number the user will be alerted and returned back to the start with a new prompt to select a length   
  if (isNaN(passwordLength)) {
    alert(`Please select a length of at least 8 characters and no more than 128 characters.`)
    return(`Please select a length of at least 8 characters and no more than 128 characters. Click on "Generate Password" to try again.`) 
  }

// If a number not between 8 and 128 is selected the user will be alerted and returned back to the start with a new prompt to select a length between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert(`Password length must be at least 8 characters and no more than 128 characters.`)
    return(`Password length must be at least 8 characters and no more than 128 characters. Click on "Generate Password" to try again.`)
  }

// Variables to prompt which character types the user wants to include in the password   
  var lowercaseOption = confirm(`Do you want the password to include lowercase letters?`)
  var uppercaseOption = confirm(`Do you want the password to include uppercase letters?`)
  var numberOption = confirm(`Do you want the password to include numbers?`)
  var specialOption = confirm(`Do you want the password to include special characters?`)

// Arrays for each character type that include the set characters for each type  
  var lowerCaseArray = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]
  var upperCaseArray = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`]
  var numberArray = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
  var specialCharArray = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `+`, `?`, `/`, `-`, `:`, `;`, `[`, `]`, `{`, `}`, `.`, `<`, `>`, `=`, `_`, "`", `|`, `~`]

// Blank Array for selected characters to concat into
  var passwordArray = []

// If one of the options is true then that character type will concat into the blank password array 
  if (lowercaseOption === true) {
    passwordArray = passwordArray.concat(lowerCaseArray)
  }

  if (uppercaseOption === true) {
    passwordArray = passwordArray.concat(upperCaseArray)
  }

  if (numberOption === true) {
    passwordArray = passwordArray.concat(numberArray)
  }
  
  if (specialOption === true) {
    passwordArray = passwordArray.concat(specialCharArray)
  }
// If none of the options are true then an alert will prompt telling the user to select at least one of the character types then send the user back to the beginning of the process
  if (!lowercaseOption && !uppercaseOption && !numberOption && !specialOption) {
    alert(`Please select at least one character type to include in your password.`)
    return(`Please select at least one character type to include in your password. Click on "Generate Password" to try again.`)
  }
// Variable to store the random password 
  var generatePassword = ``

// For loop to generate a random password with the chosen password length and the characters included in the password array
  for (var i = 0; i < passwordLength; i++) {
    generatePassword += passwordArray [Math.floor(Math.random() * (passwordArray.length))]
  }

// Final generated password will be shown to the user
  return generatePassword

}

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