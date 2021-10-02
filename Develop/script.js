// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  // assigns the result from the generate pasword function to password
  var password = generatePassword();
  // sets passwordText equal to the contents of the html elements with ID #password
  var passwordText = document.querySelector("#password");
  //value of password text is set to equal password
  passwordText.value = password;
}

// Event Listerner for when user presses generate button which then runs the writepassword function
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
  // first iterator set to j
  let j = 0;
  // first prompt loop asking how many characters user wants
  do{
  passLength = parseInt(prompt("How many characters do you want in the password? Enter a number from 8-128"));
  // checks if answer is between 8 and 128
    if(passLength >= 8 && passLength <= 128){
      j++;
    } else{
      // displays error message then loops back to reask question
      alert("Error you didn't enter a number between 8-128. Please retry :)");
    }
  }while(j != 1)

  // second prompt loop asking if user wants  numbers
  do{
  passNumbers = prompt("Do you want numbers in your password? Enter Y or N");
    if(passNumbers.toLowerCase() == "y" || passNumbers.toLowerCase() == "n"){
      j++;
    }else{
      alert("Error you didn't enter Y or N. Please retry :)");
    }
  }while(j != 2)
  
  //third prompt loop asking if user wants  special characters
  do{
  passSpecial = prompt("Do you want special characters in your password? Enter Y or N");
  if(passSpecial.toLowerCase() == "y" ||  passSpecial.toLowerCase() == "n"){
    j++;
  }else{
    alert("Error you didn't enter Y or N. Please retry :)")
  }
  }while(j != 3)
  // fourth prompt loop asking if user wants lower case letters
  do{
    passLCase = prompt("Do you want lower case letters in the password? Enter Y or N");
    if(passLCase.toLowerCase() == "y" ||  passLCase.toLowerCase() == "n"){
      j++;
    } else{
      alert("Error you didn't enter Y or N. Please retry :)");
    }
  }while(j != 4)
  // fifth prompt loop asking if user wants  upper case letters
  do{
    passUCase = prompt("Do you want upper case letters in the password? Enter Y or N");
    if(passUCase.toLowerCase() == "y" ||  passUCase.toLowerCase() == "n"){
      j++;
    } else{
      alert("Error you didn't enter Y or N. Please retry :)");
    }
  }while(j != 5)

  
  // following ifs determine whether user said yes or no to previous questions
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
  // password generator loop
  do{
    //switch loop argument generates a random number between 0 and 3
    switch(Math.floor(Math.random() * 4)){
      //first case picks a random lower case letter and adds it to the password
      case 0:
        if(useLCase){
          let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
          pass += lowerLetters.charAt(Math.floor(Math.random()*lowerLetters.length));
          i++;
      }
      break;
      //second case picks random number and adds it to the password
      case 1:
        if(useNumber){
          let numbers = '1234567890';
          pass += numbers.charAt(Math.floor(Math.random()*numbers.length));
          i++;
      }
      break;
      //third case picks a random special character and adds it to the pasword
      case 2: 
        if(useSpecial){
          let special = '!@#$%^&*()-+={}[];:_<>.,/?|~"`';
          pass += special.charAt(Math.floor(Math.random()*special.length));
          i++;
        }
      break;
      // fourth case picks a random upper case letter and adds it to the pasword
      case 3:
        if(useUCase){
          let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          pass += upperLetters.charAt(Math.floor(Math.random()*upperLetters.length));
          i++;
        }
        break;
    }
    //checks if the loop has to loop again or stop once the password length has been reached
  }while(i < passLength)
  //returns the generated password
  return(pass);
}