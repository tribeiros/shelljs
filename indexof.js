#!/usr/bin/node

// lib to shell
const shell = require('shelljs')

// arguments on cli
const args = process.argv

// json with argument
const message = { "text": args[2] }

// function to check bash on argument
function checkBash(param) {
  if (param.indexOf('bash') == 0){
    checkedBash = "bash is not allowed, use this session dude"
  } else if (param.indexOf('exit') == 0){
    checkedBash = "exit is not allowed, use this session dude"
  } else {
    checkedBash = shell.exec(message.text, {silent:true}).stdout
  }
  return checkedBash
}

//function result
const command = checkBash(message.text)

//stdout
console.log(command);

