// ask for length of password
var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//ask for character type

var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase, or all.");

//generate password
function generatePassword() {
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } if( charTypeLower === "special" ) {
    charSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
   } if( charTypeLower === "all" ) {
    charSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  
  // this is not working for some reason:
  else if (alert = "incorrect entry") {

  }

  //return value

  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

// display password in text box
document.getElementById("password").innerHTML = "Your password is: " + generatePassword();

