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

function generatePassword(){
  let passLength = parseInt(prompt("How many characters do you want in the password? Enter a number from 1-50"));
  let passNumbers = prompt("Do you want numbers in your password? Y or N");
  let passSpecial = prompt("Do you want special characters in your password? Y or N");
  let useSpecial = false;
  let useNumber = false;
  let pass = '';
  let i = 0;
 
  if(passSpecial.toLowerCase() == "y"){
    useSpecial = true;
  }
  if(passNumbers.toLowerCase() == "y"){
    useNumber = true;
  }

  do{
    switch(Math.floor(Math.random() * 3)){
      case 0:
      let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      pass += letters.charAt(Math.floor(Math.random()*letters.length));
      console.log(pass);
      i++;
      break;

      case 1:
        if(useNumber){
      let numbers = '1234567890';
      pass += numbers.charAt(Math.floor(Math.random()*numbers.length));
      console.log(pass);
      i++;
      }
      break;

      case 2: 
      if(useSpecial){
      let special = '#$%&!';
      pass += special.charAt(Math.floor(Math.random()*special.length));
      console.log(pass);
      i++;
      }
      break;
    }
  }while(i < passLength)
  return(pass);
}