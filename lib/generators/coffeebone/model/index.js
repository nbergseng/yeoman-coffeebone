
var path = require('path'),
  util = require('util'),
  yeoman = require('yeoman');

module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));

  // XXX default and banner to be implemented
  this.argument('attributes', { type: Array, defaults: [], banner: 'field[:type] field[:type]' });

  // parse back the attributes provided, build an array of attr
  this.attrs = this.attributes.map(function(attr) {
    var parts = attr.split(':');
    var valType = 'String';
    var val = '';
    if(parts[1]) {
        switch(parts[1].toLowerCase()) {
        case 'string': 
          valType = 'String';
          val = parts[2]||'""';
          break;
        case 'number': 
          valType = 'Number';
          val = parts[2]||0;
        break;
        case 'array': 
          valType = 'Array';
          val = '[]';
          break;
        case 'object': 
          valType = 'Object';
          val = '{}';
          break;
        default: 
          valType = 'UNKNOWN_TYPE';
      }
    }
    
    

    return {
      name: parts[0],
      val: val
    }
  });

  this.appname = path.basename(process.cwd());
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createModelFiles = function createModelFiles() {
  this.template('model.coffee', path.join('app/scripts/models', this.name + '.coffee'));

};
