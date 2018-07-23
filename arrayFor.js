// lib to shell
const shell = require('shelljs')

// arguments on cli
const args = process.argv

// json with argument
const message = { "text": args[2] }
message.text = message.text.replace(/\//, "")

// function to check bash on argument
function checkCommand(param) {
  var containString = false;
  var arrayForbiddenCommands = ["bash", "exit", "/", "cat", "echo","bc"];

  for (s=0; s < arrayForbiddenCommands.length; s++){
    if(arrayForbiddenCommands[s].toLowerCase() == param){
      containString = true
      return false;
    } else {
      containString = false
    }
  }

  if (containString == false){
    checkedBash = shell.exec(message.text, {silent:true}).stdout
  } 
  return checkedBash
}

//function result
const command = checkCommand(message.text)

//stdout
console.log(command)

