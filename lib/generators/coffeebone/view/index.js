
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

Generator.prototype.createViewFiles = function createViewFiles() {
  this.template('view.coffee', path.join('app/scripts/views', this.name + 'View.coffee'));
  this.template('template.handlebars', path.join('app/scripts/templates', this.name + '.handlebars'));

};
