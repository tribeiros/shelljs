var shell = require('shelljs');

if (!shell.which('fffd')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
} else {
  console.log('no')
}