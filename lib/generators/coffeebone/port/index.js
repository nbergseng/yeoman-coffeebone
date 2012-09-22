
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  var appname = path.basename(process.cwd());
  this.subkey = 'coffeebone.settings';
  this.port = arguments[0][0] || 9898;
  this.port = parseInt(this.port);

  console.log('port: ' + this.port);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setPackageValues = function addDependencies() {
  var package_parser = require('package-parser');
  package_parser.addElementToSubkey('port', this.port, this.subkey);
  
  package_parser.writePackageJsonSync();
};
