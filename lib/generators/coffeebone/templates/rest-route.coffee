module.exports.<%= _.classify(name) %>.initialize = (app) -> 
  <%= name %> = db.model('<%= name %>', app.schemas.<%= name %>)
 
    app.get('<%= prefix %><%= _.slugify(name) %>/:id?', (request, response) ->
      id = req.params.id;
      if (id)
        <%= name %>.findById(id, (err, obj) -> 
          response.send(JSON.stringfy(obj))
        )
      else
        <%= name %>.find({}, (err, objs) -> 
          response.send(JSON.stringfy(objs))
        )
    )
    app.post('<%= prefix %><%= _.slugify(name) %>/:id', (request, response) ->
      id = req.params.id;
      <%= name %>.update({_id: id}, {$set: request.body}, (error, result) ->
          response.send(JSON.stringfy(result))
        )
    )
    app.put('<%= prefix %><%= _.slugify(name) %>', (request, response) ->
      obj = new <%= name %>(request.body)
      obj.save((err) ->
        response.send(JSON.stringify(obj));
      )
    )
    app.delete('<%= prefix %><%= _.slugify(name) %>/:id', (request, response) ->
      id = req.params.id;
      if (id)
        <%= name %>.findById(id, (err, obj) -> 
          obj.remove(() ->
              response.send('')
            )
        )
    )
   
