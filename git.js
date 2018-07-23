const sh = require('shelljs');

var version = sh.exec('node --version', {silent:true}).stdout;
console.log(version);



