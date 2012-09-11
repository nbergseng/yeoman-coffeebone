
var path = require('path'),
  util = require('util'),
  yeoman = require('yeoman');

module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));

  this.appname = path.basename(process.cwd());
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
  this.template('collection.coffee', path.join('app/scripts/collections', this.name + 'Collection.coffee'));
};
