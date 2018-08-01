const shell = require('shelljs')


message = {"text":"clima guarulhos"}


var res = message.text.split(" ");
      checkedBash = shell.echo('http://wttr.in/' + res[1]).stdout
