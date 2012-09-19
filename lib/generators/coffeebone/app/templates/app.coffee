express = require 'express'
package_parser = require 'package-parser'
packageJson = package_parser.getPackageJsonSync()
settings = packageJson.coffeebone.settings

app = express()
console.log('static assets: ' + __dirname + '/' + settings.publicDir)
app.use express.static(__dirname + '/' + settings.publicDir)
app.use express.bodyParser()
app.use express.cookieParser()
app.use express.session({ secret: settings.sessionSecret})

app.mongoose = require 'mongoose'
app.db = app.mongoose.createConnection settings.mongo.host, settings.mongo.dbName

app.getModel = (name) ->
  app.db.model name, app.schemas[name]

app.db.once('open', ->
  require('./schemas').initialize app
  require('./routes').initialize app
  app.listen settings.port
);


  
