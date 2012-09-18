var path = require('path'),
    util = require('util'),
    yeoman = require('yeoman');


module.exports = Generator;

function Generator() {

  yeoman.generators.Base.apply(this, arguments);

  var resourceName = arguments[0][0];
  var restArgs = [
    resourceName
  ];
  
  this.hookFor('coffeebone:schema', {
    args: arguments[0]
  });
  this.hookFor('coffeebone:rest-route', {
    args: restArgs
  });
  this.hookFor('coffeebone:model', {
    args: arguments[0]
  });
  this.hookFor('coffeebone:rest-collection', {
    args: arguments[0]
  });
}

util.inherits(Generator, yeoman.generators.Base);

