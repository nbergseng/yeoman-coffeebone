
var path = require('path'),
  util = require('util'),
  yeoman = require('yeoman');

module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));
  // XXX default and banner to be implemented
  this.argument('attributes', { type: Array, defaults: [], banner: 'field[:type][:value] field[:type][:value]' });

  // parse back the attributes provided, build an array of attr
  this.attrs = this.attributes.map(function(attr) {
    var parts = attr.split(':');

    return {
      method: parts[1] || 'get',
      path: parts[0]
    }
  });
  this.appname = path.basename(process.cwd());
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
  this.template('route.coffee', path.join('routes', this.name + '.coffee'));
};
