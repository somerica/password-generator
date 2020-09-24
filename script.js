console.log ("Hello World!");

// Assignment Code

var generateBtn = document.querySelector("#generate");

function rand(min, max) {
  let randomNum = Math.random() * (max - min) + min;
  return Math.round(randomNum);
}


var querySelector = function () {
  
  var password = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


for (var i = 0; i < ; i++) {
  let index = rand(0,15);
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
generateBtn.addEventListener("click", writePassword);
} 
