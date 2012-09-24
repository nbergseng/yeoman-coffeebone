
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
  
  var util = require('util');
  var exec = require('child_process').exec;
  function handleNothing(error, stdout, stderr) { }
  exec("npm install", handleNothing);
};



AppGenerator.prototype.fetchBootstrap = function fetchBootstrap() {
  var cb = this.async();

  // third optional argument is the branch / sha1. Defaults to master when ommitted.
  this.remote('twitter', 'bootstrap', 'v2.1.0', function(err, remote, files) {
    if(err) { return cb(err); }

    'affix alert button carousel collapse dropdown modal popover scrollspy tab tooltip transition typeahead'.split(' ')
    .forEach(function( el ) {
      var filename = 'bootstrap-' + el + '.js';
      remote.copy( 'js/' + filename, 'app/scripts/framework/bootstrap/' + filename );
    });

    cb();
  });
};

AppGenerator.prototype.compassBootstrapFiles = function compassBootstrapFiles() {
  var cb = this.async();

  this.write('app/styles/main.scss', '@import "compass_twitter_bootstrap";');

  this.remote('kristianmandrup', 'compass-twitter-bootstrap', '19626592c8a2eafa8f52ee0344ef1ac30f74502f', function(err, remote) {
    if(err) { return cb(err); }

    remote.directory('stylesheets', 'app/styles');

    cb();
  });
};

AppGenerator.prototype.requirejs = function requirejs(){
  var cb = this.async(),
    self = this;

  this.remote('jrburke', 'requirejs', '2.0.5', function(err, remote) {
    if(err) { return cb(err); }
    remote.copy('require.js', 'app/scripts/framework/require.js');

    cb();
  });
};

AppGenerator.prototype.backbone = function backbone() {
  var cb = this.async(),
    self = this;
  this.remote('documentcloud', 'backbone', '0.9.2', function(err, remote) {
    if(err) { return cb(err); }
    remote.copy('backbone.js', 'app/scripts/framework/backbone.js');
    cb();
  });
};

AppGenerator.prototype.lodash = function lodash() {
  var cb = this.async(),
    self = this;
  this.remote('bestiejs', 'lodash', 'v0.7.0', function(err, remote) {
    if(err) { return cb(err); }
    remote.copy('lodash.js', 'app/scripts/framework/lodash.js');
    cb();
  });
};
