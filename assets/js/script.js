// Assignment code here
// All of the input values
var enter; 
var confirmNumber;
var confirmCharacter;
var confirmUpperCase;
var confirmLowerCase;

//Password variables
//Special characters
character = ["!", "#", "$", "%", "^", "&", "*", "/", "|", "+","=","@", "," ];
//Numeric characters
number = [1,2,3,4,5,6,7,8,9];
//Alphabet characters
alpha = ["a", "b","c","d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//space
space =[];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;

});
// Start function to generate password
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));