
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman');

module.exports = AppGenerator;

function AppGenerator() {
  yeoman.generators.Base.apply(this, arguments);
  this.appname = path.basename(process.cwd());
  this.username = 'Your Name';
}

util.inherits(AppGenerator, yeoman.generators.Base);

AppGenerator.prototype.setupEnv = function setupEnv() {
  // Copies the contents of the generator `templates`
  // directory into your users new application path
    this.directory('.','.', true);

};



AppGenerator.prototype.addDependencies = function addDependencies() {
  var package_parser = require('package-parser');

  package_parser.addElement('author', this.username);
  package_parser.addElement('name', this.appname);


  package_parser.addElementToSubkey('express', '*', 'dependencies');
  package_parser.addElementToSubkey('mongoose', '~3.0.3', 'dependencies');
  package_parser.addElementToSubkey('package-parser', '*', 'dependencies');
  package_parser.addElementToSubkey('coffee-script', '*', 'dependencies');
  package_parser.addElementToSubkey('publicDir', 'dist', 'coffeebone.settings');
  package_parser.addElementToSubkey('sessionSecret', 'sldfubh', 'coffeebone.settings');
  package_parser.addElementToSubkey('sessionSecret', 'sldfubh', 'coffeebone.settings');
  package_parser.addElementToSubkey('host', 'localhost', 'coffeebone.settings.mongo');
  package_parser.addElementToSubkey('dbName', this.appname, 'coffeebone.settings.mongo');
  package_parser.addElementToSubkey('port', 9898, 'coffeebone.settings');
  package_parser.writePackageJsonSync();
};