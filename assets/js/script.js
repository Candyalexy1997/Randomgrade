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

var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Get reference for the  #generate element
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
  
  // statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {

    
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
      // Continues once user input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  //  4 negative options alert shown
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");

  }
  // tatement that uses user input prompts to determine choices

  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = character.concat(number, alpha, alpha2);
  }
 
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
  }
 
else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = alpha;
}
// variable to fill uppercase conversion
else if (confirmUppercase) {
    choices = space.concat(alpha2);
};

 // password variable is an array placeholder for user generated amount of length
 var password = [];

 // Random selection for all variables: 
 for (var i = 0; i < enter; i++) {
     var pickChoices = choices[Math.floor(Math.random() * choices.length)];
     password.push(pickChoices);
 }
 // This joins the password array and converts it to a string
 var ps = password.join("");
 UserInput(ps);
 return ps;
}
// This puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
