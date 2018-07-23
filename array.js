const message = { "text": "bash"}

function checkString(stringParaComparar){
  var meuArrayDeStrings = ["bash", "exit", "/", "cat", "echo"];

  for (i=0; i<meuArrayDeStrings.length; i++){
    if(meuArrayDeStrings[i].toLowerCase() != stringParaComparar){
      console.log("roda aqui o comando");
      return false
    } else {
            return false
    }
  }
}

checkString(message.text);