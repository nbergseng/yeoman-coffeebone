exports.initialize = (app) ->
  
  app.get '/', (req, res) ->
    res.redirect '/index.html'

  