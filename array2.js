const message = { "text": "ls"}

checkString(message.text);

function checkString(stringParaComparar){
  
  var temString = false;
  var meuArrayDeStrings = ["bash", "exit", "/", "cat", "echo"];

  for (i=0; i<meuArrayDeStrings.length; i++){
    if(meuArrayDeStrings[i].toLowerCase() == stringParaComparar){
      temString = true
      return false;
    } else {
      temString = false
    }
  }
  
  if (temString == false){
    console.log("executa a porra toda aqui seu FDP arrombado");
  }
}