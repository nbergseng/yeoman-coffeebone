exports.initialize = (app) ->
  require("fs").readdirSync("./schemas").forEach((file) ->
    return if !file.match(new RegExp "\.coffee$")
    return if file == 'index.coffee'
    route = require "./" + file
    route.initialize app
  )
