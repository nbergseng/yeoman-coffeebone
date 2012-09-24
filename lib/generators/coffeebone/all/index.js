var path = require('path'),
    util = require('util'),
    yeoman = require('yeoman');


module.exports = Generator;

function Generator() {

  yeoman.generators.Base.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../templates'));
  this.dirs = 'models collections views routes helpers templates'.split(' ');
  this.appname = path.basename(process.cwd());


  // the api to hookFor and pass arguments may vary a bit.
  this.hookFor('coffeebone:app', {
    args: [ 'Application' ]
  });
  this.hookFor('coffeebone:view', {
    args: [ 'Application' ]
  });
  this.hookFor('coffeebone:model', {
    args: [ 'Application', 'appname:string:'+this.appname ]
  });
  this.hookFor('coffeebone:collection', {
    args: [ 'Application' ]
  });
  this.hookFor('coffeebone:router', {
    args: [ 'Application' ]
  });
}

util.inherits(Generator, yeoman.generators.Base);


Generator.prototype.createDirLayout = function createDirLayout() {
  var self = this;
  this.dirs.forEach(function(dir) {
    self.log.write('Creating app/scripts/' + dir + ' directory...')
    self.mkdir(path.join('app/scripts', dir));
    self.log.ok();
  });
};

Generator.prototype.createAppFile = function createAppFile() {
  this.template('application.coffee', 'app/scripts/application.coffee');
};

Generator.prototype.mainStylesheet = function mainStylesheet(){
  this.write('app/styles/main.css', "/* Will be compiled down to a single stylesheet with your sass files */");
};

