
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  var appname = path.basename(process.cwd());
  this.subkey = 'coffeebone.settings.mongo';
  this.dbName = arguments[0][0] || appname;
  this.dbHost = arguments[0][1] || 'localhost';
  
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setPackageValues = function addDependencies() {
  var package_parser = require('package-parser');
  package_parser.addElementToSubkey('host', this.dbHost, this.subkey);
  package_parser.addElementToSubkey('dbName', this.dbName, this.subkey);
  package_parser.writePackageJsonSync();
};
