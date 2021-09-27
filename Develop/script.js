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
  let useSpecial = false;
  let useNumber = false;
  let useUCase = false;
  let useLCase = false;
  let passLength = "";
  let passNumbers = "";
  let passSpecial = "";
  let passUCase = "";
  let passLCase = "";
  
  let pass = '';
  let j = 0;

  do{
  passLength = parseInt(prompt("How many characters do you want in the password? Enter a number from 8-128"));
    if(passLength >= 8 && passLength <= 128){
      j++;
    } else{
      alert("Error you didn't enter a number between 8-128. Please retry :)");
    }
  }while(j != 1)

  do{
  passNumbers = prompt("Do you want numbers in your password? Enter Y or N");
    if(passNumbers.toLowerCase() == "y" || passNumbers.toLowerCase() == "n"){
      j++;
    }else{
      alert("Error you didn't enter Y or N. Please retry :)");
    }
  }while(j != 2)
  
  do{
  passSpecial = prompt("Do you want special characters in your password? Enter Y or N");
  if(passSpecial.toLowerCase() == "y" ||  passSpecial.toLowerCase() == "n"){
    j++;
  }else{
    alert("Error you didn't enter Y or N. Please retry :)")
  }
  }while(j != 3)

  do{
    passLCase = prompt("Do you want lower case letters in the password? Enter Y or N");
    if(passLCase.toLowerCase() == "y" ||  passLCase.toLowerCase() == "n"){
      j++;
    } else{
      alert("Error you didn't enter Y or N. Please retry :)");
    }
  }while(j != 4)

  do{
    passUCase = prompt("Do you want upper case letters in the password? Enter Y or N");
    if(passUCase.toLowerCase() == "y" ||  passUCase.toLowerCase() == "n"){
      j++;
    } else{
      alert("Error you didn't enter Y or N. Please retry :)");
    }
  }while(j != 5)

  

  if(passNumbers.toLowerCase() == "y"){
    useNumber = true;
  }
  if(passSpecial.toLowerCase() == "y"){
    useSpecial = true;
  }
  if(passUCase.toLowerCase() == "y"){
    useUCase = true;
  }
  if(passLCase.toLowerCase() == "y"){
    useLCase = true;
  }
  
  let i = 0;
  do{
    switch(Math.floor(Math.random() * 4)){
      case 0:
        if(useLCase){
          let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
          pass += lowerLetters.charAt(Math.floor(Math.random()*lowerLetters.length));
          console.log(pass);
          i++;
      }
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

      case 3:
        if(useUCase){
          let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          pass += upperLetters.charAt(Math.floor(Math.random()*upperLetters.length));
          console.log(pass);
          i++;
        }
        break;
    }
  }while(i < passLength)
  return(pass);
}